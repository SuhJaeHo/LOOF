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
                //onCameraChange 이벤트 발생 시 Main index.js의 onRegionChange가 이벤트의 callback함수로 실행되고  
                //이 때, onRegionChange의 매개변수에 위치값과 stop이라는 callback함수를 전달하여 onRegionChange 함수가 실행된 후 stop 함수가 실행된다.  
                onCameraChange={e => props.onRegionChange(e, () => stop())}                        
                onMapClick={e => props.onRegionChange(e, () => stop())}     
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
                <View style={{width: 2, height: 2, borderRadius: 1, transform: [{ scaleX: 4 }], backgroundColor: shadowColor, left: 13.5, bottom: 5,}}></View>                 
            </View>                  
        </View>
    )
}

export default NaverMap;
