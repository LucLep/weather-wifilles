import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, StyleSheet, Text, FlatList } from 'react-native';
import axios from 'axios';
import WeatherRow from '../components/WeatherRow';

const Result = ({ route }) => {
    const { city } = route.params;
    const [report, setReport] = useState(null);

    const fetchCityCoordinates = () => {
        axios.get(`https://api-adresse.data.gouv.fr/search/?q=${city}`).then((response) => {
            console.log('Fetch city coordinates');
            const {
                features: [
                    {
                        geometry: {
                            coordinates: [longitude, latitude],
                        },
                    },
                ],
            } = response.data;

            fetchWeather(longitude, latitude);
        });
    };

    const fetchWeather = (longitude, latitude) => {
        console.log('Fetch weather');
        const APIKey = '12dc7ff4b46d92db997484ccef10713b';
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=alerts,hourly,minutely&appid=${APIKey}`,
            )
            .then((response) => {
                setReport(response.data);
            })
            .catch((e) => {
                console.error(e); // Network problem
            });
    };

    useEffect(() => {
        // fetchWeather()
        fetchCityCoordinates();
    }, []);

    const renderListItem = ({ item, index }) => <WeatherRow item={item} index={index} />;

    const renderContent = () => {
        if (report === null) {
            return <ActivityIndicator color={'gray'} size="large" />;
        } else {
            return (
                <View style={styles.container}>
                    <FlatList data={report.daily} renderItem={renderListItem} />
                </View>
            );
        }
    };

    return renderContent();
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#e70404',
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default Result;
