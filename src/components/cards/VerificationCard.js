import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {windowWidth} from '../../utils/Dimensions';
import {COLORS} from '../../theme/themes';

const VerificationCard = ({props, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[
        styles.container,
        {
          borderColor: props?.iconColor,
          borderWidth: 1,
          opacity: !props?.isDone ? 0.7 : null,
        },
      ]}>
      <View style={styles.verifySection}>
        <Ionicons name={props?.iconName} size={20} color={props?.iconColor} />
        <Text style={{marginLeft: 10, color: 'black'}}>{props?.name}</Text>
      </View>
      {props?.isDone ? (
        <Ionicons
          name={'checkmark-outline'}
          size={20}
          color={COLORS.appBtnColor}
        />
      ) : null}
    </TouchableOpacity>
  );
};

export default VerificationCard;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: windowWidth / 1.1,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    alignItems: 'center',
  },
  verifySection: {
    flexDirection: 'row',
  },
});
