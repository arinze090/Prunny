import {
  View,
  Image,
  ImageBackground,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-clipboard/clipboard';

import {COLORS} from '../../theme/themes';
import {windowWidth} from '../../utils/Dimensions';
import {RNToast, copyToClipboard} from '../../Library/Common';
import Toast from 'react-native-toast-message';

const sliderData = [
  {
    id: 1,
    image: require('../../assets/1.jpg'),
  },
  {
    id: 2,
    image: require('../../assets/2.jpg'),
  },
  //   {
  //     id: 3,
  //     image: require('../../assets/3.jpg'),
  //   },
];

const Carousels = ({props}) => {
  const [copiedText, setCopiedText] = useState(false);

  // this function just simply uses the Clipboard package to copy the account number text which can be bu pasted/used anywhere
  const copyAccountNumber = textToCopy => {
    copyToClipboard(Clipboard, textToCopy);
    setCopiedText(true);
    RNToast(Toast, `Account Number: ${textToCopy}`);
  };

  function CarouselFun({props}) {
    const [switchState, setSwitchState] = useState(false);

    return (
      <ImageBackground
        style={{
          height: 200,
          width: '97%',
          borderRadius: 10,
          backgroundColor: COLORS.appColor,
        }}>
        <View
          style={{
            flex: 1,
            width: '97%',
            borderRadius: 10,
            padding: 20,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 12,
              fontWeight: '400',
              lineHeight: 16,
              marginBottom: 20,
            }}>
            Savings Account Balance
          </Text>

          <Text
            style={{
              color: COLORS.white,
              fontSize: 24,
              fontWeight: '700',
              lineHeight: 30,
              marginBottom: 40,
            }}>
            {/* Here i'm conditionally rendering or display the full amount to the user if the switch isnt clicked */}

            {switchState ? 'NGN xxx' : 'NGN102, 238.71'}
          </Text>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 12,
              fontWeight: '400',
              lineHeight: 16,
            }}>
            Arinze Nchor
          </Text>
        </View>

        <View style={styles.accountSection}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 16,
                marginRight: 10,
              }}>
              0986342679
            </Text>
            <Ionicons
              name="copy-outline"
              size={20}
              color={COLORS.white}
              onPress={() => {
                copyAccountNumber('0986342679');
              }}
            />
            {copiedText && <Text style={{color: 'white'}}>Copied</Text>}
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={{
                color: COLORS.white,
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 16,
                marginRight: 10,
              }}>
              Hide Balance
            </Text>
            <Switch
              value={switchState}
              onValueChange={() => {
                setSwitchState(!switchState);
              }}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }

  const Slider = ({item, index}) => {
    return <CarouselFun props={item} key={index} />;
  };

  return (
    <View style={{position: 'relative', margin: 10}}>
      <Carousel
        loop
        width={windowWidth}
        height={200}
        autoPlay={false}
        data={sliderData}
        scrollAnimationDuration={10000}
        renderItem={Slider}
      />
    </View>
  );
};

export default Carousels;

const styles = StyleSheet.create({
  accountSection: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
});
