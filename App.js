import React, { useEffect } from 'react';

import SplashScreen from "react-native-splash-screen";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices';

import Router from './navigation/router';

const store = configureStore({reducer: rootReducer});

const App = () => {  
  useEffect(() => {
    setTimeout(() => {
        SplashScreen.hide()
    }, 1000)        
  }, [])

  return (
    <Provider store={store}>
        <Router />      
    </Provider>
  );
};

export default App;
