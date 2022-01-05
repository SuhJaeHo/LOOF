import React, { Component } from "react";
import { View, Text, Pressable, Image } from "react-native";

import NaverMapView, { Marker } from "react-native-nmap";

import styles from './styles';

const NaverMap = (props) => {                   
    return (
        <View>
            <NaverMapView        
                style={styles.map}
                center={props.region}      
                //처음에 onCameraChange 이벤트 실행 시 계속해서 서울 시청 주소를 불러와서 NaverMapView에 내장되어 있는 onInitialized 함수를 사용하여 
                //현재 위치를 불러오하는 함수인 getCurrentLocation()을 호출하였다
                onInitialized={() => props.getCurrentLocation()}
                onCameraChange={e => props.onRegionChange(e)}                        
                onMapClick={e => props.onRegionChange(e)}                        
                showsMyLocationButton={true}            
                zoomControl={false}
            >    
            </NaverMapView>
            {/* ping */}            
            <View style={{top: '50%', left: '50%', marginLeft: -15, marginTop: -40, position: 'absolute'}}>
                <Image style={{height: 50, resizeMode:'contain'}} source={require('../../../assets/marker/pin.png')}/>   
            </View>                  
        </View>
    )
}

export default NaverMap;
