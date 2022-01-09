import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity, Pressable, FlatList, RefreshControlBase } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { Input } from 'react-native-elements';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { updateBy } from '../../slices/region';
import { useDispatch } from 'react-redux';

import styles from './styles';

import { GOOGLE_CLOUD_PLATFORM_API_KEY, KAKAO_RESTAPI_KEY } from '@env';

const LocationSearchScreen = ({ route, navigation }) => {            
    const [text, setText] = useState('');    
    const [results, setResults] = useState(''); 

    const dispatch = useDispatch();
    
    const { latitude, longitude } = route.params;

    const searchPlaces = (value) => {
        setText(value);   
        
        if(value !== '') {
            fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${value}&y=${latitude}&x=${longitude}&page=10&sort=distance`, {
            headers: {
                Authorization: `KakaoAK ${KAKAO_RESTAPI_KEY}`
            }
            })                 
            .then(response => response.json())
            .then(response => {             
                setResults(response.documents);                                                   
            })
            .catch(error => console.log(error))      
        }else {
            setResults('');
        }                  
    }

    const Empty = () => {
        return (
            <View style={styles.noSearchConatiner}>
                <Text style={styles.noSearchText}>검색 결과 없음</Text>
            </View>
        )
    }

    const SearchList = () => {
        return (
            <FlatList                 
                data={results}
                renderItem={({item}) => {
                    return (
                        <Pressable 
                            style={styles.searchListContainer}
                            //navigation.push를 사용해야 메인에서 params를 잘 받아오는데 이유가 뭘까?
                            onPress={() => navigation.navigate({name: 'Main'}, dispatch(updateBy({latitude: parseFloat(item.y), longitude: parseFloat(item.x), latitudeDelta: 0.015, longitudeDelta: 0.0121})))}
                        >
                            <View style={{flex: 0.9}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Ionicons                                                                         
                                        name={'location-sharp'}
                                        size={30}
                                        color={'#49ffbd'}
                                    />
                                    <View>
                                        <Text style={styles.searchListPlace}>{item.place_name}</Text>                                          
                                        <Text style={styles.searchListAddress}>{item.address_name}</Text>
                                    </View>
                                </View>
                            </View>

                            <View>
                                <Text style={styles.searchListDistance}>{parseInt(item.distance / 1000) + 'km'}</Text>                              
                            </View>                                                       
                        </Pressable>                        
                    )
                }}
                ItemSeparatorComponent={() => <View style={styles.separator}></View>}
                keyExtractor={item => item.id}
            />
        )
    }    

    return (
        <View style={{flex: 1, backgroundColor: '#fff'}}>     
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
                <Pressable
                    onPress={() => navigation.navigate('Main')}
                >
                    <AntDesign name={'arrowleft'} size={30} style={{color: '#383636'}}/>
                </Pressable>            
                <TextInput
                    style={styles.searchInput}
                    placeholder="주소 검색"
                    value={text}                
                    onChangeText={(value) => searchPlaces(value)}
                />    
            </View>         
            <View style={styles.searchInputBottom}></View>
            {results.length === 0 ? <Empty /> : <SearchList />}                         
        </View>
    )
}

export default LocationSearchScreen;




//유사배열은 구조가 배열과 유사하지만 배열은 아니기 때문에 배열 프로토타입에 정의되어 있는 메소드를 직접 사용할 수 없다.
//Array.prototype에 정의된 메소드를 불러오겠다고 명시적으로 선언해야 배열 메소드를 사용할 수 있으며 이 때 사용되는 것이 call(다른 객체의 함수를 자신의 것처럼 사용 가능하게)이다.                                                     
//ex) Array.prototype.forEach.call(response.documents, (data) => {                                                                     
  

