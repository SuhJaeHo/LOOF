import React, { useEffect } from "react";
import { View } from "react-native";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

const Splash = ({ navigation }) => {    
    useEffect(() => {
        isSignedIn();        
    }, [])

    isSignedIn = async() => {
        const isSignedIn = await GoogleSignin.isSignedIn();
                
        if(isSignedIn) {  
            navigation.replace('DrawerNav');          
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