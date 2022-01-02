import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    fullContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,      
        backgroundColor: '#121212',
    },
    logoContainer: {                
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,                        
    },
    //
    logoImg: {        
        width: 140,
        height: 140,
        resizeMode: 'contain',                
    },
    customLoginContainer: {
        alignItems: 'center',
    },
    emailInput: {
        width: Dimensions.get('window').width * 0.8,
        height: 50,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 30,
        color: '#fff',      
        marginBottom: 40, 
        paddingHorizontal: 15,         
    },
    loginInput: {
        width: Dimensions.get('window').width * 0.8,
        height: 50,
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 30,
        color: '#fff',  
        paddingHorizontal: 15,
    },
    customLoginButton: {
        width: Dimensions.get('window').width * 0.8,
        height: 50,
        borderRadius: 30,
        backgroundColor: '#fb009e',
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: 40,  
        marginBottom: 10,             
    },
    customLoginText: {
        fontSize: 20,        
        color: '#fff',        
    },
    registerButton: {
        
    },
    registerText: {
        fontSize: 14,
        textDecorationLine: 'underline',
        color: '#fff',                
    },
    socialLoginContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 40,
    },
    googleLoginButton: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 40,        
    },
    facebookLoginButton: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center', 
    },
    privacyContainer: {
        alignItems: 'center',                              
    },
    privacyText_1: {
        color: '#fff',
    },
    privacyText_2: {        
        color: '#49ffbd',        
    }
})

export default styles;