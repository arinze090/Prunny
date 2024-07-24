import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';

import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {COLORS} from '../theme/themes';
import DashboardScreen from './Home/DashboardScreen';
import TransactionsScreen from './Home/TransactionsScreen';
import MoreScreen from './Home/MoreScreen';
import CardsScreen from './Home/CardsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={DashboardScreen}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
        headerTitle: 'Home',
        headerStyle: {
          backgroundColor: '#000917',
        },
        headerTitleStyle: {
          color: '#ccc',
        },
      }}
    />
  </Stack.Navigator>
);

const TransactionStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="TransactionsScreen"
      component={TransactionsScreen}
      options={{
        headerShown: true,
        headerBackTitleVisible: false,
        headerTitle: 'Transaction History',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleStyle: {
          color: '#000',
        },
      }}
    />
  </Stack.Navigator>
);

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarStyle: (route => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          const routeWithNoTarBar = [];
          if (routeWithNoTarBar.includes(routeName)) {
            return {display: 'none'};
          }
          return {
            backgroundColor: 'white',
            height: 75,
            paddingBottom: 20,
            paddingTop: 10,
          };
        })(route),
        tabBarActiveTintColor: COLORS.appColor,
        tabBarColor: COLORS.appColor,
        tabBarInActiveBackgroundColor: COLORS.appColor,
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={({route}) => ({
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <FeatherIcons name="home" color={color} size={26} />
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionStack}
        options={({route}) => ({
          tabBarLabel: 'Transactions',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="history" size={26} color={color} />
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Send"
        component={TransactionStack}
        options={({route}) => ({
          tabBarLabel: '',
          tabBarIcon: ({color}) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 40,
                backgroundColor: COLORS.appBtnColor,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Ionicons name="paper-plane-outline" size={30} color={'white'} />
            </View>
          ),
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Cards"
        component={CardsScreen}
        options={({route}) => ({
          tabBarLabel: 'Cards',
          tabBarIcon: ({color}) => (
            <Ionicons name="card-outline" size={26} color={color} />
          ),
          headerShown: true,
        })}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={({route}) => ({
          tabBarLabel: 'More',
          tabBarIcon: ({color}) => (
            <Ionicons name="grid-outline" size={26} color={color} />
          ),
          headerShown: true,
        })}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
