import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import React from 'react';
import TransactionCard from '../../components/cards/TransactionCard';
import {COLORS} from '../../theme/themes';

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

const TransactionsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          marginBottom: 20,
          padding: 20,
        }}>
        {transactionsData?.map((cur, i) => (
          <TransactionCard key={i} props={cur} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TransactionsScreen;

const styles = StyleSheet.create({
  servicesText: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 25,
  },
});
