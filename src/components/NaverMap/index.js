import React, { Component, useState, useRef } from "react";
import { View, Text, Pressable, Image, Animated, Easing, PanResponder } from "react-native";

import NaverMapView, { Marker } from "react-native-nmap";

import styles from './styles';

const NaverMap = (props) => {   
    //useRef : .current 프로퍼티로 전달된 인자(initialValue)로 초기화된 변경 가능한 ref 객체를 반환  
    const animation = useRef(new Animated.Value(0)).current; 

    const [shadowColor, setShadowColor] = useState('grey');
    
    const move = () => {
        setShadowColor('#CCCCCC');
        Animated.timing(animation, {
            toValue: -20,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.out(Easing.exp),
        }).start();
    }

    const stop = () => {
        setShadowColor('grey');
        Animated.timing(animation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
            easing: Easing.out(Easing.exp),
        }).start();
    }    

    return (
        <View>
            <NaverMapView        
                style={styles.map}
                center={props.region}      
                //처음에 onCameraChange 이벤트 실행 시 계속해서 서울 시청 주소를 불러와서 NaverMapView에 내장되어 있는 onInitialized 함수를 사용하여 
                //현재 위치를 불러오는 함수인 getCurrentLocation()을 호출하였다
                onInitialized={() => props.getCurrentLocation()}
                onCameraChange={e => props.onRegionChange(e, () => stop())}                        
                onMapClick={e => props.onRegionChange(e)}     
                onTouch={() => move()}                                                                       
                showsMyLocationButton={true}            
                zoomControl={false}                                                  
            >    
            </NaverMapView>            
            {/* ping */}            
            <View style={{top: '50%', left: '50%', marginLeft: -15, marginTop: -40, position: 'absolute'}}>
                <Animated.Image 
                    style={[
                        styles.customMarker,  
                        {
                            transform: [{translateY: animation}]
                        }                      
                    ]}                     
                    source={require('../../../assets/marker/pin.png')}                     
                />                
                <View style={{width: 8, height: 3, borderRadius: 1.5, backgroundColor: shadowColor, left: 10.5, bottom: 5,}}></View>                 
            </View>                  
        </View>
    )
}

export default NaverMap;
