import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput ,Touchable, Pressable } from 'react-native';

import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';

import NaverMap from '../components/NaverMap';
import styles from './styles';

import { GOOGLE_WEB_CLIENT_ID, GOOGLE_CLOUD_PLATFORM_API_KEY, NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from '@env';

const MainScreen = ({ navigation }) => {
    const [region, setRegion] = useState({
        latitude: 37.49783315274643, 
        longitude: 127.02783092726877,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
    });

    const [address, setAddress] = useState('');  

    useEffect(() => {
        Geocoder.init(GOOGLE_CLOUD_PLATFORM_API_KEY, {language : "ko"});                    
    }, [])

    getCurrentLocation = () => {
        Geolocation.getCurrentPosition((position => {            
            setRegion({latitude: position.coords.latitude, longitude: position.coords.longitude, latitudeDelta: 0.015, longitudeDelta: 0.0121})
        }), error => console.log(error), {enableHighAccuracy: true});
    }

    onRegionChange = (reg) => {
        setRegion({latitude: reg.latitude, longitude: reg.longitude, latitudeDelta: 0.015, longitudeDelta: 0.0121})                         
    }
    
    getAddress = () => {        
        fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + region.latitude + ',' + region.longitude + '&key=' + GOOGLE_CLOUD_PLATFORM_API_KEY + '&language=ko')
        .then(response => response.json()) 
        .then(response => {                        
            let address = response.results[0].formatted_address.split(' ');
            address = address.slice(2).join(' '); 
            console.log(address);                   
            setAddress(address);
        })                                           
        .catch(err => console.log(err));
    }      
    
    return (
        <View>                        
            <NaverMap
                region={region}
                onRegionChange={(reg) => onRegionChange(reg, getAddress())}        
                getCurrentLocation={() => getCurrentLocation()}   
            />
            <TouchableOpacity
                style={styles.headerPressable}                 
                activeOpacity={0.9}              
                onPress={() => navigation.navigate('LocationSearch', {latitude: region.latitude, longitude: region.longitude})}                 
            >
                <Text style={styles.headerText}>{address}</Text>
            </TouchableOpacity>           
        </View>
    )
}

export default MainScreen;



/*
    geocode = async() => {            
        fetch("https://naveropenapi.apigw.ntruss.com/map-reversegeocode/v2/gc?request=coordsToaddr&coords=" + region.longitude + "," + region.latitude + "&sourcecrs=epsg:4326&orders=roadaddr&output=json", {
            headers: {
                "X-NCP-APIGW-API-KEY-ID": NAVER_CLIENT_ID,
                "X-NCP-APIGW-API-KEY": NAVER_CLIENT_SECRET
            }
        })
        .then(response => response.json())
        .then(response => {      
            let address;              
            console.log(response);
            console.log(response.results[0]);
            console.log(response.results[0].region);

            if(response.results[0].land.addition0.value === '') {
                address = response.results[0].region.area1.name + ' ' + response.results[0].region.area2.name + ' ' + response.results[0].region.area3.name + ' ' + response.results[0].land.name;
            }else {
                address = response.results[0].region.area1.name + ' ' + response.results[0].region.area2.name + ' ' + response.results[0].region.area3.name + ' ' + response.results[0].land.addition0.value;                           
            }
            
            
            console.log(address);   
        })      
    }
*/