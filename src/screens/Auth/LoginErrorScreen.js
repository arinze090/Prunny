import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SafeAreaViewComponent from '../../components/common/SafeAreViewComponent';
import FormButton from '../../components/form/FormButton';
import FormInput from '../../components/form/FormInput';
import {windowWidth} from '../../utils/Dimensions';
import TransparentButton from '../../components/form/TransparentButton';
import {COLORS} from '../../theme/themes';
import FormInputLabel from '../../components/form/FormInputLabel';

const LoginErrorScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [rightIcon, setRightIcon] = useState('eye-outline');

  const [loading, setLoading] = useState(false);

  // Error states
  const [formError, setFormError] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState('ffggg');
  const [passwordError, setPasswordError] = useState('');

  // This function handles the password visibility displaying the icons
  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye-outline') {
      setRightIcon('eye-off-outline');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off-outline') {
      setRightIcon('eye-outline');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const login = async () => {
    console.log('dhfhfh');
  };

  return (
    <SafeAreaViewComponent>
      <View style={{padding: 20}}>
        <TransparentButton
          title={'Cancel'}
          marginTop={20}
          width={4}
          marginBottom={50}
        />

        <Image src={require('../../assets/1.jpg')} style={styles.image} />

        <Text style={styles.title}>Login to your account</Text>
        <Text style={styles.description}>
          We are glad to have you, kindly enter your login details.
        </Text>

        {/* Authentications */}
        <View style={styles.auth}>
          <FormInputLabel
            label={'Passsword'}
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
          <FormInput
            value={password}
            placeholder="Password"
            width={1.1}
            autoCorrect={false}
            rightIcon={rightIcon}
            rightIconColor="#444444"
            placeholderTextColor="#000"
            autoCapitalize="none"
            secureTextEntry={passwordVisibility}
            textContentType="password"
            onChangeText={txt => {
              setPassword(txt);
              setFormError('');
            }}
            handlePasswordVisibility={handlePasswordVisibility}
          />
        </View>
        <FormButton
          title={'Login'}
          disabled={false}
          marginTop={40}
          marginBottom={50}
          onPress={login}
        />

        <View style={styles.authFeatures}>
          <Text
            style={{
              marginBottom: 30,
              fontSize: 14,
              fontWeight: '400',
              color: COLORS.appColor,
            }}>
            Don’t have an account? Sign up
          </Text>
          <Text
            style={{
              marginBottom: 30,
              fontSize: 14,
              fontWeight: '400',
              color: COLORS.appGrey,
            }}>
            Forgot Password?
          </Text>

          <Ionicons
            name={'finger-print-outline'}
            size={40}
            color={COLORS.appColor}
            style={[styles.leftIcon, {marginBottom: 30}]}
          />

          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: COLORS.appGrey,
              lineHeight: 22,
            }}>
            v1.1.1
          </Text>
        </View>
      </View>
    </SafeAreaViewComponent>
  );
};

export default LoginErrorScreen;

const styles = StyleSheet.create({
  image: {
    width: 109,
    height: 109,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 35,
    marginTop: 20,
  },
});
