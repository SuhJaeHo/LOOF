import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput ,Touchable, Pressable } from 'react-native';

import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';

import NaverMap from '../components/NaverMap';

import { useDispatch, useSelector } from 'react-redux';
import { updateBy } from '../../slices/region';

import styles from './styles';

import { GOOGLE_WEB_CLIENT_ID, GOOGLE_CLOUD_PLATFORM_API_KEY, NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from '@env';

const MainScreen = ({ route, navigation }) => {    
    const [address, setAddress] = useState('');     
    
    const Region = useSelector(state => state.region);
    const dispatch = useDispatch();

    useEffect(() => {  
        Geocoder.init(GOOGLE_CLOUD_PLATFORM_API_KEY, {language : "ko"});         
        
        navigation.addListener('focus', () => {
            console.log(Region.region);
        })
    }, [])

    getCurrentLocation = () => {        
        Geolocation.getCurrentPosition((position => {        
            dispatch(updateBy({latitude: position.coords.latitude, longitude: position.coords.longitude, latitudeDelta: 0.015, longitudeDelta: 0.0121}));                         
        }), error => console.log(error));        
    }

    onRegionChange = (reg) => {                                  
        dispatch(updateBy({latitude: reg.latitude, longitude: reg.longitude, latitudeDelta: 0.015, longitudeDelta: 0.0121}));                            
    }
    
    getAddress = () => {        
        fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + Region.region.latitude + ',' + Region.region.longitude + '&key=' + GOOGLE_CLOUD_PLATFORM_API_KEY + '&language=ko')
        .then(response => response.json()) 
        .then(response => {                        
            let address = response.results[0].formatted_address.split(' ');
            address = address.slice(2).join(' ');                               
            setAddress(address);
        })                                           
        .catch(err => console.log(err));
    }      
    
    return (
        <View>                        
            <NaverMap
                region={Region.region}
                onRegionChange={(reg) => onRegionChange(reg, getAddress())}        
                getCurrentLocation={() => getCurrentLocation()}   
            />
            <TouchableOpacity
                style={styles.headerPressable}                 
                activeOpacity={0.9}              
                onPress={() => navigation.navigate('LocationSearch', {latitude: Region.region.latitude, longitude: Region.region.longitude})}                 
            >
                <Text style={styles.headerText}>{address}</Text>
            </TouchableOpacity>           
        </View>
    )
}

export default MainScreen;

