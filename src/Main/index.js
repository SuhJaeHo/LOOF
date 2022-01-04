import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput ,Touchable, Pressable } from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import NaverMap from '../components/NaverMap';
import styles from './styles';

import { GOOGLE_WEB_CLIENT_ID, NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from '@env';

const MainScreen = ({ navigation }) => {
    const [region, setRegion] = useState({
        latitude: 37.49783315274643, 
        longitude: 127.02783092726877,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    });
    
    const [address, setAddress] = ('');

    useEffect(() => {
        
    }, [])

    onRegionChange = (reg) => {        
        setRegion({
            latitude: reg.latitude,
            longitude: reg.longitude, 
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,           
        })               
    }

    geocode = async() => {            
        fetch("https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=" + region.longitude + "," + region.latitude + "&sourcecrs=epsg:4326&orders=admcode,legalcode,addr,roadaddr&output=json", {
            headers: {
                "X-NCP-APIGW-API-KEY-ID": NAVER_CLIENT_ID,
                "X-NCP-APIGW-API-KEY": NAVER_CLIENT_SECRET
            }
        })
        .then(response => response.json())
        .then(response => {
            console.log(response.results[0].region.area1.name);
            console.log(response.results[0].region.area2.name);
            console.log(response.results[0].region.area3.name);
            console.log(response.results[0].region.area4.name);
            let address = response.results[0].region.area1.name + ' ' + response.results[0].region.area2.name + ' ' + response.results[0].region.area3.name + ' ' + response.results[0].region.area4.name;                           
            console.log(address);   
        })
        .then(() => console.log(address));        
    }
    
    return (
        <View>  
            <TouchableOpacity
                onPress={() => geocode()}
            >
                <Text>버튼</Text>
            </TouchableOpacity>             
            <NaverMap
                region={region}
                onRegionChange={(reg) => onRegionChange(reg)}
            />
        </View>
    )
}

export default MainScreen;