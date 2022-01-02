import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Touchable } from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { GOOGLE_WEB_CLIENT_ID } from '@env';

const MainScreen = ({ navigation }) => {
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: GOOGLE_WEB_CLIENT_ID,            
        })
    }, [])

    signOut = async() => {
        await GoogleSignin.signOut();
        navigation.navigate('Login');
    }

    return (
        <View>
            <TouchableOpacity
                onPress={() => signOut()}
            >
                <Text>로그아웃</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainScreen;