import React, {useEffect, useState} from 'react';
import {Alert, AppState, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS} from '../theme/themes';
import MainScreen from '../screens/MainScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AppNavigation = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set isLoading to false after 3 seconds
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup the timeout to avoid potential memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  // To show the onboarding screen on just first launch
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      AsyncStorage.getItem('alreadyLaunched').then(value => {
        if (value === null) {
          AsyncStorage.setItem('alreadyLaunched', 'true');
          setIsFirstLaunch(true);
          console.log('isFirstLaunch');
        } else {
          setIsFirstLaunch(false);
          console.log('notIsFirstLaunch');
        }
      });

      // AppStateIOS.addEventListener('change', state => console.log('AppStateIOS changed to', state));

      AppState.addEventListener('change', state =>
        console.log('AppState changed to', state),
      );
    }
    return () => {
      isMounted = false;
    };
  }, []);

  // Displaying the app component
  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <Drawer.Navigator
        // ref={navigationRef}
        // drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerLabelStyle: {
            marginLeft: -25,
          },
          drawerActiveBackgroundColor: COLORS.black,
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: COLORS.btnBorderColor,
        }}
        headerMode="none">
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{
            headerShown: false,
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" color={color} size={22} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  } else if (isFirstLaunch === false) {
    return (
      <Drawer.Navigator
        // ref={navigationRef}
        // drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerLabelStyle: {
            marginLeft: -15,
          },
          drawerActiveBackgroundColor: COLORS.black,
          drawerActiveTintColor: 'white',
          drawerInactiveTintColor: COLORS.btnBorderColor,
        }}
        headerMode="none">
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={{
            headerShown: false,
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" color={color} size={22} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }
};

export default AppNavigation;

const styles = StyleSheet.create({});
