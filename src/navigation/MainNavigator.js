import React, {useEffect, useState} from 'react';
import AuthStack from './AuthNavigator';
import AppNavigation from './AppNavigator';
import SplashScreen from '../screens/SplashScreen';

import {useSelector} from 'react-redux';

const MainNavigator = () => {
  const state = useSelector(state => state);

  const loggedInUser = state?.user?.user;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set isLoading to false after 3 seconds
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Cleanup the timeout to avoid potential memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  // Displaying the app component
  if (isLoading) {
    return <SplashScreen />;
  } else {
    return <>{loggedInUser ? <AppNavigation /> : <AuthStack />}</>;
  }
};

export default MainNavigator;
