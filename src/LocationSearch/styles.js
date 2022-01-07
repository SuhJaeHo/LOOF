import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    searchInput: {
        height: 60,
        marginLeft: 10,
        fontSize: 16,
    },
    searchInputBottom: {
        backgroundColor: '#e0e0e0',
        height: 1,      
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    noSearchConatiner: { 
        flex: 1,        
        justifyContent: 'center',       
        alignItems: 'center',
    },
    noSearchText: {
        fontSize: 18,
        color: '#b0a9a9',
    },
    searchListContainer: {
        flexDirection: 'row',
        alignItems: 'center',  
        justifyContent: 'space-between',            
        height: 100,
        paddingLeft: 5,        
    },    
    searchListPlace: {
        fontSize: 16,
        color: '#383636',  
        top: 3,      
    },  
    searchListAddress: {
        fontSize: 14,  
        color: '#b0a9a9',                     
    },  
    searchListDistance: {
        fontSize: 14,
        color: '#383636', 
        paddingRight: 10,
        bottom: 9,
    },
    separator: {
        backgroundColor: '#e0e0e0',
        height: 1,        
    },  
})

export default styles;