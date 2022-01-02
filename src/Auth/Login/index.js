import React, { useEffect, useState } from 'react';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, Linking } from 'react-native';

import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

import { GOOGLE_WEB_CLIENT_ID } from '@env';

import styles from './styles';

const LoginScreen = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');    

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: GOOGLE_WEB_CLIENT_ID,            
        })
    }, [])

    signIn = async() => {
        try {
            const userInfo = await GoogleSignin.signIn();
        } catch(error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                
            } else if (error.code === statusCodes.IN_PROGRESS) {

            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {

            } else {

            }
        }
    }

    return (
        <View style={styles.fullContainer}>     
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logoImg}                               
                    source={require('../../../assets/logo/halflogo2.png')}                    
                />
            </View>
            <View style={styles.customLoginContainer}>
                <TextInput 
                    style={styles.emailInput}
                    placeholder='이메일'
                    placeholderTextColor='#8b9cb5'                    
                />                
                <TextInput 
                    style={styles.loginInput}
                    placeholder='로그인'
                    placeholderTextColor='#8b9cb5'                    
                />
                <TouchableOpacity style={styles.customLoginButton}>
                    <Text style={styles.customLoginText}>로그인</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.registerText}>회원가입</Text>    
                </TouchableOpacity>
            </View>  
            <View style={{borderBottomColor: '#fff', borderBottomWidth: 1, marginVertical: 50}}></View>   
            <View style={styles.socialLoginContainer}>
                <TouchableOpacity 
                    style={styles.googleLoginButton}
                    onPress={() => signIn()}
                >
                    <Image 
                        style={{width: 35, height: 35}}
                        source={require('../../../assets/logo/g-logo.png')}                        
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.facebookLoginButton}>
                    <Image 
                        style={{width: 38, height: 38}}
                        source={require('../../../assets/logo/flogo.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.privacyContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.privacyText_1}
                        onPress={() => Linking.openURL('https://www.loof.party/Privacy')}
                    >                        
                        가입하시면 LOOF의 
                    </Text>
                    <Text style={styles.privacyText_2}
                        onPress={() => Linking.openURL('https://www.loof.party/Privacy')}
                    >
                        개인정보 처리방침, 이용약관에
                    </Text>
                </View>                
                <Text style={styles.privacyText_1}>동의하게 됩니다.</Text>                
            </View>            
        </View>
    )
}

export default LoginScreen;