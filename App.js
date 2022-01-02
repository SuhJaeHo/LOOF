import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import SplashScreen from "react-native-splash-screen";

import Router from './navigation/router';

const App = () => {  
  useEffect(() => {
    setTimeout(() => {
        SplashScreen.hide()
    }, 1000)        
  }, [])

  return (
    <>
      <Router />
    </>
  );
};

export default App;
