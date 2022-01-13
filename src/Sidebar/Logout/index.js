import React, { useEffect } from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

import { GOOGLE_WEB_CLIENT_ID } from '@env';

const LogoutBtn = ({}) => {    
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: GOOGLE_WEB_CLIENT_ID,            
        })
    }, [])
    
    const navigation = useNavigation();

    signOut = () => {
        GoogleSignin.signOut().then(() => {
            navigation.navigate('Login');
        });
    }

    return (
        <TouchableOpacity
            onPress={() => signOut()}
        >
            <Text>로그아웃</Text>
        </TouchableOpacity>
    )
}

export default LogoutBtn;