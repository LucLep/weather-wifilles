//export default class About extends React.Component {
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import Result from "./Result";
import {COLORS} from "../styles/Style";

const Stack = createStackNavigator();

const Search = ({navigation}) => {
    const [city, setCity] = useState('');

    useEffect(() => {
        setCity('Rouen');
    }, []);

    const searchCity = () => {
        navigation.navigate('Result', {city: city})
    }


    return (
        <View style={styles.view}>
            <TextInput style={styles.input} value={city} onChangeText={setCity}/>
            <View style={{flex: 1, marginTop: 20}}>
                <Button color={COLORS.primary} title={'Rechercher'} onPress={searchCity}/>
            </View>
        </View>
    )

};

const SearchScreen = () => (
    <Stack.Navigator>
        <Stack.Screen name={"Search"} component={Search} options={{title: 'Rechercher une ville'}}/>
        <Stack.Screen name={"Result"} component={Result}
                      options={({route}) => ({title: `Recherche pour ${route.params.city}`})}/>
    </Stack.Navigator>
)

const styles = StyleSheet.create({
    view: {
        flex: 1,
        margin: 20,
    },
    input: {
        marginTop: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 20,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 10,
    }
});

export default SearchScreen;