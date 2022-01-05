import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    headerPressable: {
        width: Dimensions.get('window').width * 0.9,        
        height: 50,
        borderRadius: 5,
        backgroundColor: '#fff',                
        top: 8,
        left: Dimensions.get('window').width * 0.05,         
        position: 'absolute',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,   
        justifyContent: 'center',
        alignItems: 'center',               
    },
    headerText: {
        fontSize: 16,
        color: 'black',        
    }
})

export default styles;