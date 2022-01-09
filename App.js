import React, { useEffect } from 'react';
import { View, Text } from 'react-native';

import SplashScreen from "react-native-splash-screen";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './slices';

import Router from './navigation/router';

const store = createStore(rootReducer);

const App = () => {  
  useEffect(() => {
    setTimeout(() => {
        SplashScreen.hide()
    }, 1000)        
  }, [])

  return (
    <Provider store={store}>
      <>
        <Router />
      </>
    </Provider>
  );
};

export default App;
