import React, { useEffect, useState } from 'react';
import { View, TextInput } from 'react-native';

const LocationSearchScreen = () => {
    const [searchValue, setSearchValue] = useState(''); 

    return (
        <View>
            <TextInput                
                value={searchValue}
            />            
        </View>
    )
}

export default LocationSearchScreen;
