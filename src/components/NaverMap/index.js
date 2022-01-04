import React from "react";
import { View, Text, Pressable, Image } from "react-native";

import NaverMapView, { Marker } from "react-native-nmap";

import styles from './styles';

const NaverMap = (props) => {
    return (
        <NaverMapView        
            style={styles.map}
            center={props.region}      
            onCameraChange={e => props.onRegionChange(e)}  
            onMapClick={e => props.onRegionChange(e)}            
            showsMyLocationButton={true}
            zoomControl={false}
        >
            <Marker
                coordinate={props.region} width={45} height={45}                
            >
                <Image 
                    style={{width: 45, height: 45, resizeMode: 'contain'}}
                    source={require('../../../assets/marker/pin.png')}                         
                />                     
            </Marker>            
        </NaverMapView>
    )
}

export default NaverMap;