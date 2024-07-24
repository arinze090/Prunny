import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import {useIsFocused} from '@react-navigation/native';

import SafeAreaViewComponent from '../../components/common/SafeAreViewComponent';
import FormButton from '../../components/form/FormButton';
import FormInput from '../../components/form/FormInput';
import {windowWidth} from '../../utils/Dimensions';
import TransparentButton from '../../components/form/TransparentButton';
import {COLORS} from '../../theme/themes';
import FormInputLabel from '../../components/form/FormInputLabel';
import {checkPassword, phoneValidator} from '../../Library/Validation';
import {useDispatch} from 'react-redux';
import {getUser} from '../../redux/features.js/user/userSlice';
import {RNToast} from '../../Library/Common';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();

  // for faceid activation
  const focused = useIsFocused();
  const rnBiometrics = new ReactNativeBiometrics({
    allowDeviceCredentials: false,
  });

  // FaceId states
  const [deviceBiometricsType, setDeviceBiometricsType] = useState(null);
  const [biometricsAvailable, setBiometricsAvailable] = useState(false);

  // FaceId function to get the supported biometricsType of the device
  async function getBiometricsType() {
    const {available, biometryType} = await rnBiometrics.isSensorAvailable();

    // for faceid to work, i'm setting the biometricType to the state variable
    // that is if it matches 'FaceID' and also checking it's availability
    if (available && biometryType === 'FaceID') {
      setDeviceBiometricsType(biometryType);
      setBiometricsAvailable(available);
    }
  }

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [rightIcon, setRightIcon] = useState('eye-outline');

  const [loading, setLoading] = useState(false);

  // Error states
  const [formError, setFormError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordErrorTrue, setPasswordErrorTrue] = useState(false);

  // Here i'm checking for the password validility by checking for the following lowercase, uppercase, numbers, special characters
  // the checkPassword function from my helper/Library checks for at least lowercase, uppercase, numbers, and special characters
  const validatedPassword = checkPassword(password);

  // This function handles the password visibility displaying the icons and showing the text of the password inputs
  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye-outline') {
      setRightIcon('eye-off-outline');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off-outline') {
      setRightIcon('eye-outline');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  // this is the login function that after the user inputs the login details, it navigates them into the dashboard screen or the main screen
  const login = async () => {
    if (!phoneValidator(phoneNumber)) {
      setPhoneNumberError('phone number must be 11digits long');
    } else if (!validatedPassword?.isValid) {
      // Here, i'm stating the reason for the password not been correct
      setPasswordError(validatedPassword?.cause);
      setPasswordErrorTrue(true);
    } else {
      setLoading(true);
      // save the user data to redux
      // here i'm saving the login details to redux, so that it can be accessible anywhere in the app
      // for now we can just save just the phone number of the iser cos its wrong to save the password, except we encrypt it
      dispatch(getUser({phone: phoneNumber}));

      // Here i'm making a toast to the user, which dispolays at the top of the screen for a brief seconds
      RNToast(Toast, `Welcome back! ${phoneNumber} `);

      // after which i'm navigating to the main screen
      navigation.navigate('HomeScreen');
    }
  };

  // This function handles the login with FaceId, it checks if the biometricType's availablility before signing it
  const verifyFaceID = () => {
    // here if there is no biometrucType available, i'm prompting a message to the user to see
    if (!biometricsAvailable) {
      Alert.alert(
        'FaceID Activation',
        'Face ID not available or setup on this device.',
      );
      return;
    }

    // using the biometrics package, i'm able to get results from the api
    rnBiometrics.biometricKeysExist().then(resultObject => {
      const {keysExist} = resultObject;

      // Here, if the key exist in the database, we'll login the user using the faceIdLoginMutation
      if (keysExist) {
        let epochTimeSeconds = '200';
        let payload = epochTimeSeconds + 'faceidsignature';

        // this section creates a faceID signature on the server
        // it's more like if i have a new device and havent activated faceid on it, it creates one for me and we could use the results to store in our database or elsewhere
        rnBiometrics
          .createSignature({promptMessage: 'Confirm Face ID', payload: payload})
          .then(res => {
            const {success, signature} = res;
            console.log('result from rnBiometrics', res);

            // if successful, we can save the signature generated by the biometric api and store on our database here
            if (success) {
              console.log('successful biometrics provided');
              // Alert.alert('Successful Face ID Verification');
            } else {
              console.log('user cancelled biometric prompt');
            }
          })
          .catch(() => {
            console.log('biometrics failed');
          });
      } else {
        Alert.alert('Face ID Activation', 'Please login to enable Face ID.');
        return;
      }
    });
  };

  useEffect(() => {
    // here i'm calling the getBiometricType to fetch if the device supports faceid or not
    getBiometricsType();
  }, [focused]);

  return (
    <SafeAreaViewComponent>
      <View style={{padding: 20}}>
        <TransparentButton
          title={'Cancel'}
          marginTop={20}
          width={4}
          marginBottom={50}
        />

        {/* Here i'm conditionally display both the signin error page which displays the password input with the error message */}
        {passwordError ? (
          <View>
            <Image
              source={require('../../assets/1.jpg')}
              style={styles.image}
            />
            <Text style={styles.title}>Arinze,</Text>
            <Text style={styles.description}>
              Kindly enter your login details.
            </Text>

            {/* Authentications */}
            <View style={styles.auth}>
              <FormInput
                value={password}
                placeholder="Password"
                width={1.1}
                autoCorrect={false}
                rightIcon={rightIcon}
                rightIconColor="#000"
                placeholderTextColor="#000"
                autoCapitalize="none"
                secureTextEntry={passwordVisibility}
                textContentType="password"
                onChangeText={txt => {
                  setPassword(txt);
                  setFormError('');
                  setPasswordError('');
                  setPasswordErrorTrue(false);
                }}
                handlePasswordVisibility={handlePasswordVisibility}
              />
              {passwordError ? (
                <Text style={styles.validationError}>{passwordError}</Text>
              ) : null}
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.title}>Login to your account</Text>
            <Text style={styles.description}>
              We are glad to have you, kindly enter your login details.
            </Text>

            {/* Authentications */}
            <View style={styles.auth}>
              <FormInputLabel
                label={'Phone Number'}
                value={phoneNumber}
                onChangeText={txt => {
                  setPhoneNumber(txt);
                  setFormError('');
                  setPhoneNumberError('');
                }}
                width={1.1}
                keyboardType={'phone-pad'}
              />
              {phoneNumberError ? (
                <Text style={styles.validationError}>{phoneNumberError}</Text>
              ) : null}
            </View>
            <View style={styles.auth}>
              <FormInputLabel
                label={'Password'}
                value={password}
                placeholder="*****"
                width={1.1}
                autoCorrect={false}
                rightIcon={rightIcon}
                rightIconColor="#000"
                placeholderTextColor="#000"
                autoCapitalize="none"
                secureTextEntry={passwordVisibility}
                textContentType="password"
                onChangeText={txt => {
                  setPassword(txt);
                  setFormError('');
                  setPasswordError('');
                  setPasswordErrorTrue(false);
                }}
                handlePasswordVisibility={handlePasswordVisibility}
              />
              {passwordError ? (
                <Text style={styles.validationError}>{passwordError}</Text>
              ) : null}
            </View>
          </View>
        )}

        <View style={{marginTop: 20}}>
          <Text style={styles.error}>{formError}</Text>
          <FormButton
            title={
              loading ? (
                <ActivityIndicator color={'white'} size={'large'} />
              ) : (
                'Login'
              )
            }
            disabled={loading || passwordErrorTrue}
            marginTop={20}
            marginBottom={50}
            onPress={login}
          />
        </View>

        <View style={styles.authFeatures}>
          <Text style={[styles.forgotPasswordText, {color: COLORS.appColor}]}>
            Don’t have an account? Sign up
          </Text>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

          <Ionicons
            name={'finger-print-outline'}
            size={40}
            color={COLORS.appColor}
            style={[styles.leftIcon, {marginBottom: 30}]}
            onPress={verifyFaceID}
          />

          <Text style={styles.forgotPasswordText}>v1.1.1</Text>
        </View>
      </View>
    </SafeAreaViewComponent>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  auth: {
    width: windowWidth,
    // alignSelf: "center",
    marginTop: 20,
    // marginLeft: 20,
    // backgroundColor: "red",
  },
  title: {
    color: COLORS.appColor,
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 34,
    marginBottom: 20,
  },
  description: {
    color: COLORS.appGrey,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    marginBottom: 20,
  },
  validationError: {
    color: 'red',
    fontWeight: '500',
    marginBottom: 15,
    fontSize: 13,
    // textAlign: 'center',
  },
  authFeatures: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  forgotPasswordText: {
    marginBottom: 30,
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.appGrey,
    lineHeight: 22,
  },
  image: {
    width: 109,
    height: 109,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 35,
    marginTop: 20,
  },
  error: {
    color: 'red',
    fontWeight: '500',
    alignSelf: 'center',
    marginBottom: 7,
    fontSize: 13,
  },
});
