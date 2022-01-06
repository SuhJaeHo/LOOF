import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity, FlatList } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { Input } from 'react-native-elements';

import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { GOOGLE_CLOUD_PLATFORM_API_KEY, KAKAO_RESTAPI_KEY } from '@env';

const LocationSearchScreen = ({ route, navigation }) => {       
    const [text, setText] = useState('');
    const [results, setResults] = useState('');
    
    const { latitude, longitude } = route.params;

    const [todos, setTodos] = useState([
        {id: 1, text: '작업'},
        {id: 2, text: '테스트'},
        {id: 3, text: '투두'},
    ])

    useEffect(() => {
        console.log(results.length);
    }, [])

    const searchPlaces = (value) => {
        setText(value);   
        
        if(value !== '') {
            fetch(`https://dapi.kakao.com/v2/local/search/keyword.json?query=${value}&y=37.514322572335935&x=127.06283102249932&page=10&`, {
            headers: {
                Authorization: `KakaoAK ${KAKAO_RESTAPI_KEY}`
            }
            })                 
            .then(response => response.json())
            .then(response => {             
                setResults(response.documents);
                console.log(results.length);  
                console.log(results);              
                //유사배열은 구조가 배열과 유사하지만 배열은 아니기 때문에 배열 프로토타입에 정의되어 있는 메소드를 직접 사용할 수 없다.
                //Array.prototype에 정의된 메소드를 불러오겠다고 명시적으로 선언해야 배열 메소드를 사용할 수 있으며 이 때 사용되는 것이 call(다른 객체의 함수를 자신의 것처럼 사용 가능하게)이다.                                                     
                /*
                Array.prototype.forEach.call(response.documents, (data) => {                                                                     
                })
                */         
            })
            .catch(error => console.log(error))      
        }else {
            setResults('');
            console.log(results.length);
        }                  
    }

    const Empty = () => {
        return (
            <View>
                <Text>검색 결과 없음</Text>
            </View>
        )
    }

    const SearchList =  ({todos}) => {
        return (
            <View>
                <Text>{todos.text}</Text>
            </View>
            /*
            <FlatList                 
                data={todos}
                renderItem={(item) => {
                    <View>
                        <Text>{item.text}</Text>
                    </View>
                }}
                keyExtractor={item => item.id}
            />
            */
        )
    }    

    return (
        <View style={{flex: 1}}>
            <TextInput
                style={{}}
                placeholder="주소 검색"
                value={text}                
                onChangeText={(value) => searchPlaces(value)}
            />      
            {results.length === 0 ? <Empty /> : <SearchList todos={todos}/>}                         
        </View>

        /*
        <GooglePlacesAutocomplete             
            placeholder='주소 검색'          
                                                    
            styles={{
                textInputContainer: {
                    backgroundColor: 'grey',
                },
                textInput: {
                    height: 50,
                    marginTop: 5,                    
                },
                row: {
                    padding: 20,
                }
            }}              
            enablePoweredByContainer={false}            
            renderRightButton={()  => 
                <TouchableOpacity 
                    style={{position: 'absolute', left: Dimensions.get('window').width * 0.9, top: 20}}                    
                >
                    <MaterialIcons name={'cancel'} size={20} color={'lightgrey'}/>
                </TouchableOpacity>
            }    

            query={{
                key: GOOGLE_CLOUD_PLATFORM_API_KEY,
                components: 'country:kr',
                language: 'ko',
                rankby: 'distance',
            }}    
        />
        */
    )
}

export default LocationSearchScreen;
