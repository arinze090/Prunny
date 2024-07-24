import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/themes';
import {windowHeight, windowWidth} from '../../utils/Dimensions';

const ViewButton = ({
  title,
  onPress,
  disabled,
  marginBottom,
  marginTop,
  width,
  opacity,
  textColor,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        disabled ? styles.disabledBtn : styles.btn,
        {
          marginTop: marginTop,
          marginBottom: marginBottom,
          width: windowWidth / (width || 1.1),
          opacity: opacity ? opacity : null,
        },
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={[styles.btnText, {color: textColor ? textColor : 'white'}]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ViewButton;

const styles = StyleSheet.create({
  btn: {
    width: windowWidth / 1.2,
    height: 30,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#2082201A',
  },
  btnText: {
    alignSelf: 'center',
    color: COLORS.formActionBtnText,
    fontSize: 12,
    fontWeight: '400',
    alignContent: 'center',
  },
  disabledBtn: {
    width: windowWidth / 1.2,
    height: 52,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: COLORS.appBtnColor,
    opacity: 0.5,
  },
});
