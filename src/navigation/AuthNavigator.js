import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import LoginErrorScreen from '../screens/Auth/LoginErrorScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="LoginError" component={LoginErrorScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
