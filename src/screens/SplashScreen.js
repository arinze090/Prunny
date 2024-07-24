import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/themes';

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.bankName}>Consistent Trust Microfinance Bank</Text>
      <Text style={styles.bankName}>(CTMB)</Text>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // alignSelf: 'center',
  },
  bankName: {
    color: COLORS.black,
    fontSize: 28,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
