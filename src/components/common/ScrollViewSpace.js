import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScrollViewSpace = ({marginBottom}) => {
  return (
    <View
      style={[
        styles.section,
        {
          marginTop: 50,
          // minHeight: 50,
          marginBottom: marginBottom ? marginBottom : 50,
        },
      ]}
    />
  );
};

export default ScrollViewSpace;

const styles = StyleSheet.create({});
