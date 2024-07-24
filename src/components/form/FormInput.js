import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {windowHeight, windowWidth} from '../../utils/Dimensions';
import {COLORS} from '../../theme/themes';
import {
  darkModeBgColorPrecedence,
  darkModeIconColorPrecedence,
  darkModeTextColorPrecedence,
} from '../../Library/ThemingPrecedence';
import {useDispatch, useSelector} from 'react-redux';

const FormInput = ({
  leftIcon,
  // iconColor = '#000',
  rightIcon,
  inputStyle,
  containerStyle,
  placeholderTextColor,
  handlePasswordVisibility,
  onPress,
  autoCapitalize,
  autoComplete,
  keyboardType,
  maxLength,
  editable,
  width,
  height,
  ...rest
}) => {
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        {
          width: windowWidth / (width || 1.2),
          height: Platform.OS == 'android' ? 55 : windowHeight / (height || 19),
        },
      ]}
      onPress={onPress}>
      {leftIcon ? (
        <Ionicons
          name={leftIcon}
          size={20}
          color={COLORS.appGrey}
          style={styles.leftIcon}
        />
      ) : null}
      <TextInput
        {...rest}
        placeholderTextColor={'black'}
        style={[styles.input, inputStyle]}
        autoCapitalize={autoCapitalize}
        // autoComplete={false}
        keyboardType={keyboardType}
        maxLength={maxLength}
        editable={editable}
        autoCorrect={false}
      />
      {rightIcon ? (
        <TouchableOpacity
          style={{padding: 6}}
          onPress={handlePasswordVisibility}>
          <Ionicons
            name={rightIcon}
            size={20}
            color={COLORS.appGrey}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    flexDirection: 'row',
    padding: 3,
    borderWidth: 1,
    borderColor: '#666',

    // backgroundColor: 'red',
  },
  leftIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    width: '100%',
    fontSize: 14,
    color: 'black',
    marginLeft: 10,

    height: Platform.OS == 'android' ? 47 : null,
  },
  rightIcon: {
    marginLeft: 10,
    alignSelf: 'center',
    marginTop: 10,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // marginBottom: 10,
    height: 20,
  },
});
