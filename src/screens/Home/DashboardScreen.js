import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../theme/themes';
import Carousels from '../../components/carousel/Carousel';
import ViewButton from '../../components/form/ViewButton';
import ServicesCard from '../../components/cards/ServicesCard';
import TransactionCard from '../../components/cards/TransactionCard';
import ScrollViewSpace from '../../components/common/ScrollViewSpace';

const servicesData = [
  {
    id: 1,
    name: 'Send Money',
    iconName: 'paper-plane-outline',
    backgroundColor: '#D6FAD1',
  },
  {
    id: 2,
    name: 'Remita',
    iconName: 'paper-plane-outline',
    backgroundColor: '#F9E7DB',
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
  {
    id: 5,
    name: 'Loans',
    iconName: 'cash-outline',
    backgroundColor: '#FFF2C9',
  },
  {
    id: 6,
    name: 'Cable TV',
    iconName: 'tv-outline',
    backgroundColor: '#EBEBEB',
  },
  {
    id: 7,
    name: 'Invest',
    iconName: 'bar-chart-outline',
    backgroundColor: '#DDEDF4',
  },
  {
    id: 8,
    name: 'Electricity',
    iconName: 'bulb-outline',
    backgroundColor: '#BFE9D5',
  },
];

const transactionsData = [
  {
    id: 1,
    type: 'debit',
    amount: '10,000',
    balance: 'N120,000.98',
    date: '14 Oct, 2022, 1:00PM',
    name: 'Tunde Ednut',
  },
  {
    id: 2,
    type: 'credit',
    amount: '10,000',
    balance: 'N120,000.98',
    date: '14 Oct, 2022, 1:00PM',
    name: 'Tunde Ednut',
  },
  {
    id: 3,
    type: 'credit',
    amount: '10,000',
    balance: 'N120,000.98',
    date: '14 Oct, 2022, 1:00PM',
    name: 'Tunde Ednut',
  },
];

const DashboardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.leftSection}>
          <Image source={require('../../assets/1.jpg')} style={styles.image} />
          <View>
            <Text style={styles.welcome}>Hi, Arinze</Text>
            <Text style={styles.welcomeText}>How are you today?</Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <Ionicons name="moon" size={25} color={COLORS.black} />
          <Ionicons
            name="notifications-outline"
            size={25}
            color={COLORS.black}
            style={{marginLeft: 10}}
          />
        </View>
      </View>

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

        {/* Transactions section */}
        <View style={styles.servicesSection}>
          <Text style={styles.servicesText}>Recent Transactions</Text>
          <ViewButton
            title={'View All'}
            textColor={COLORS.appColor}
            width={4.5}
            onPress={() => {
              navigation.navigate('TransactionsScreen');
            }}
          />
        </View>

        {/* Here i'm using the data from transactionsData to map and display the list of transactions on the screen */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            // padding: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 20,
          }}>
          {transactionsData?.map((cur, i) => (
            <TransactionCard key={i} props={cur} />
          ))}

          {/* This basically just adds extra space to the scrollview so the user can see the bottom of the content its displaying */}
          <ScrollViewSpace />
        </ScrollView>

        {/* This basically just adds extra space to the scrollview so the user can see the bottom of the content its displaying */}
        <ScrollViewSpace />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DashboardScreen;

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
