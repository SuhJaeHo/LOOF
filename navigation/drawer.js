import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from "../src/Main";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
} 

const DrawerNav = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Main" component={HomeScreenStack}/>
        </Drawer.Navigator>
    )
}

export default DrawerNav;