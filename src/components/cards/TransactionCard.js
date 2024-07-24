import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../theme/themes';
import {windowWidth} from '../../utils/Dimensions';

const TransactionCard = ({props}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftSection}>
        <View style={styles.iconContainer}>
          <Ionicons name="paper-plane-outline" size={20} color={'black'} />
        </View>
        <View>
          <Text style={styles.transactName}>{props?.name}</Text>
          <Text style={styles.transactDate}>{props?.date}</Text>
        </View>
      </View>
      <View style={styles.amountSection}>
        <Text
          style={[
            styles.amountType,
            {color: props?.type == 'debit' ? '#CC0000' : COLORS.appColor},
          ]}>
          {props?.type == 'debit' ? '-' : '+'}
          {props?.amount}
        </Text>
        <Text style={styles.transactDate}>{props?.balance}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: windowWidth / 1.1,
    padding: 10,
    borderBottomColor: COLORS.appGrey,
    borderBottomWidth: 1,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    width: 36,
    borderRadius: 20,
    backgroundColor: '#B7B7B7',
    opacity: 0.8,
    marginRight: 10,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactName: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    color: '#333333',
    marginBottom: 4,
  },
  transactDate: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 12,
    color: '#666666',
  },
  amountSection: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  amountType: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    marginBottom: 4,
  },
});
