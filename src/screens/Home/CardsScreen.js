import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Carousels from '../../components/carousel/Carousel';

const CardsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Carousel section */}
      <Carousels />
    </SafeAreaView>
  );
};

export default CardsScreen;

const styles = StyleSheet.create({});
