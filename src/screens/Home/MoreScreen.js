import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {COLORS} from '../../theme/themes';
import Carousels from '../../components/carousel/Carousel';
import ViewButton from '../../components/form/ViewButton';
import ServicesCard from '../../components/cards/ServicesCard';
import VerificationCard from '../../components/cards/VerificationCard';
import ScrollViewSpace from '../../components/common/ScrollViewSpace';
import {useDispatch} from 'react-redux';
import {signOutUser} from '../../redux/features.js/user/userSlice';

const servicesData = [
  {
    id: 1,
    name: 'Send Money',
    iconName: 'paper-plane-outline',
    backgroundColor: '#D6FAD1',
  },
  {
    id: 2,
    name: 'Loans',
    iconName: 'cash-outline',
    backgroundColor: '#FFF2C9',
  },
  {
    id: 3,
    name: 'Pay Bills',
    iconName: 'receipt-outline',
    backgroundColor: '#EFC7B6',
  },
  {
    id: 4,
    name: 'Airtime',
    iconName: 'phone-portrait-outline',
    backgroundColor: '#DDEDF4',
  },
];

const verificationTasks = [
  {
    id: 1,
    isDone: 1,
    iconName: 'shield-checkmark-outline',
    iconColor: 'green',
    name: 'Upgrade KYC Level',
  },
  {
    id: 2,
    isDone: 0,
    iconName: 'stats-chart-outline',
    iconColor: '#D6E9F1',
    name: 'Set Account Limits',
  },
  {
    id: 3,
    isDone: 0,
    iconName: 'finger-print-outline',
    iconColor: '#E95F28',
    name: 'Enable your biometrics',
  },
];

const MoreScreen = () => {
  const dispatch = useDispatch();

  // this functions logs the user out and clears the redux data
  function logout() {
    dispatch(signOutUser());
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Carousel section */}
        <Carousels />

        {/* Services section */}
        <View style={styles.servicesSection}>
          <Text style={styles.servicesText}>Services</Text>
          <ViewButton
            title={'View All'}
            textColor={COLORS.appColor}
            width={4.5}
          />
        </View>

        {/* Here i'm using the data from serviceData to map and display the items on the screen */}
        <View
          style={{
            // padding: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          {servicesData?.map((cur, i) => (
            <ServicesCard key={i} props={cur} />
          ))}
        </View>

        {/* Things to do section */}
        <View style={styles.servicesSection}>
          <Text style={styles.servicesText}>Things To do</Text>
          <Text
            style={[
              styles.servicesText,
              {color: COLORS.appColor, fontWeight: '700', fontSize: 12},
            ]}>
            Done 1 of 3
          </Text>
        </View>

        {/* Here i'm using the data from verificationTasks data to map and display the list of tasks the user needs to perform on the screen */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'center',
            marginBottom: 20,
            padding: 20,
          }}>
          {verificationTasks?.map((cur, i) => (
            <VerificationCard key={i} props={cur} />
          ))}
          {/* This basically just adds extra space to the scrollview so the user can see the bottom of the content its displaying */}
          <ScrollViewSpace marginBottom={20} />
        </ScrollView>

        <View style={{padding: 20}}>
          <VerificationCard
            props={{
              name: 'Logout',
              iconName: 'log-out-outline',
              iconColor: 'red',
            }}
            onPress={logout}
          />
        </View>

        {/* This basically just adds extra space to the scrollview so the user can see the bottom of the content its displaying */}
        <ScrollViewSpace />
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  topSection: {
    padding: 20,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 30,
    marginRight: 10,
  },
  welcome: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
    color: COLORS.black,
  },
  welcomeText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
    color: COLORS.appGrey,
  },
  servicesSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  servicesText: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
  },
});
