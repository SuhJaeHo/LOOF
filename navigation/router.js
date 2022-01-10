import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNav from './drawer';
import Splash from '../src/Auth/Splash';
import LoginScreen from '../src/Auth/Login';
import LocationSearchScreen from '../src/LocationSearch';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>            
            <Stack.Navigator>
                <Stack.Screen 
                    name="Splash"
                    component={Splash}
                    options={{headerShown: false}}
                />
                <Stack.Screen 
                    name="Login"
                    component={LoginScreen}   
                    options={{headerShown: false}}                 
                />
                <Stack.Screen 
                    name="DrawerNav"
                    component={DrawerNav}
                    options={{headerShown: false}}                 
                />
                <Stack.Screen 
                    name="LocationSearch"
                    component={LocationSearchScreen}
                    options={{headerShown: false}}                 
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;