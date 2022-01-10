import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput ,Touchable, Pressable, Dimensions } from 'react-native';

import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';

import NaverMap from '../components/NaverMap';

import { useDispatch, useSelector } from 'react-redux';
import { updateByRegion } from '../../slices/region';
import { updateByAddress } from '../../slices/address';

import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import { GOOGLE_WEB_CLIENT_ID, GOOGLE_CLOUD_PLATFORM_API_KEY, NAVER_CLIENT_ID, NAVER_CLIENT_SECRET } from '@env';

const MainScreen = ({ route, navigation }) => {    
    const dispatch = useDispatch();

    const address = useSelector(state => state.address.address);
    const region = useSelector(state => state.region.region);
    
    useEffect(() => {  
        Geocoder.init(GOOGLE_CLOUD_PLATFORM_API_KEY, {language : "ko"});                 
    }, [])

    getCurrentLocation = () => {        
        Geolocation.getCurrentPosition((position => {                    
            dispatch(updateByRegion({latitude: position.coords.latitude, longitude: position.coords.longitude, latitudeDelta: 0.015, longitudeDelta: 0.0121}));                         
        }), error => console.log(error));       
    }

    onRegionChange = (reg) => {                                  
        dispatch(updateByRegion({latitude: reg.latitude, longitude: reg.longitude, latitudeDelta: 0.015, longitudeDelta: 0.0121}));                            
    }
    
    getAddress = () => {        
        fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + region.latitude + ',' + region.longitude + '&key=' + GOOGLE_CLOUD_PLATFORM_API_KEY + '&language=ko')
        .then(response => response.json()) 
        .then(response => {                        
            let address = response.results[0].formatted_address.split(' ');
            address = address.slice(2).join(' ');                               
            dispatch(updateByAddress(address));
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
                <Ionicons name={'menu-outline'} style={styles.menuButtom} size={30} onPress={() => navigation.openDrawer()}/>                      
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={styles.headerText}>{address}</Text>                
                </View>                
            </TouchableOpacity>                           
        </View>
    )
}

export default MainScreen;

