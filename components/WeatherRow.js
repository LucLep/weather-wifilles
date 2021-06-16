import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import moment from "moment";
import 'moment/locale/fr';
import { Feather } from '@expo/vector-icons';
import { COLORS } from "../styles/Style";

moment.locale('fr')


const WeatherRow = ({ item, index }) => {

    const formatTemperature = () => {
        const { day } = item.temp;

        const formattedTemperature = `${Math.round(day)} °C`;

        return (
            <Text style={styles.temperature}>{formattedTemperature}</Text>
        )
    }

    const renderWeatherIcon = (weatherType) => {
        let iconType = '';
        switch (weatherType) {
            case 'Rain':
                iconType = 'cloud-rain';
                break;
            case 'Clouds':
                iconType = 'cloud';
                break;
            case 'Sun ':
            default:
                iconType = 'sun';
                break;
        }
        return (<Feather name={iconType} size={40} color="white" />)
    }

    const formatDate = () => {
        const date = moment(item.dt * 1000).format('DD/MM');
        const day = moment(item.dt * 1000).format('ddd').toUpperCase();

        const { weather: [{
            main: weatherType
        }]
        } = item;

        return (
            <>
                {renderWeatherIcon(weatherType)}
                <Text style={styles.date}>{day} {date}</Text>
            </>
        );
    };

    return (
        <View style={[styles.item, styles.view, index === 0 && styles.firstView]}>
            {formatDate()}
            {formatTemperature()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: COLORS.primary,
        flex: 1,
        flexDirection: 'row',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.secondary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    temperature: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 35,
    },
    date: {
        fontSize: 18,
        color: 'white',
    },
    view: {

    },
    firstView: {
        backgroundColor: COLORS.secondaryLight,
    },
});

export default WeatherRow;
