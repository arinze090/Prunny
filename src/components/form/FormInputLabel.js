import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FormInput from './FormInput';

const FormInputLabel = ({label, labelStyle, ...props}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <FormInput {...props} />
    </View>
  );
};

export default FormInputLabel;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
});
