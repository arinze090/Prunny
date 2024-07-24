import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/themes';

const ServicesCard = ({props}) => {
  return (
    <TouchableOpacity style={[styles.container]}>
      <View
        style={[
          styles.iconContainer,
          {backgroundColor: props?.backgroundColor},
        ]}>
        <Ionicons name={props?.iconName} size={25} color={'black'} />
      </View>
      <Text numberOfLines={1} style={styles.serviceTitle}>
        {props?.name}
      </Text>
    </TouchableOpacity>
  );
};

export default ServicesCard;

const styles = StyleSheet.create({
  container: {
    width: 69,
    height: 84,
    margin: 10,
  },
  iconContainer: {
    borderRadius: 10,
    width: 63,
    height: 60,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  serviceTitle: {
    color: COLORS.black,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
  },
});
