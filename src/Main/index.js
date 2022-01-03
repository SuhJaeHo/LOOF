import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Touchable } from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { GOOGLE_WEB_CLIENT_ID } from '@env';

const MainScreen = ({ navigation }) => {
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });

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
            <MapView 
                style={{width: '100%', height: '100%'}}   
                region={region}
            />            
            <TouchableOpacity
                onPress={() => signOut()}
            >
                <Text>로그아웃</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MainScreen;