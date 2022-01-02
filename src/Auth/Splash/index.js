import React, { useEffect } from "react";
import { View } from "react-native";

import SplashScreen from "react-native-splash-screen";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Splash = ({ navigation }) => {    
    useEffect(() => {
        isSignedIn();        
    }, [])

    isSignedIn = async() => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        
        if(isSignedIn) {  
            navigation.replace('Main');          
        }else {
            navigation.replace('Login');
        }
    }

    return (
        <View>

        </View>
    )
}

export default Splash;