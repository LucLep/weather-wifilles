import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import About from "./pages/About";
import SearchScreen from "./pages/Search";
import {NavigationContainer,} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Feather} from '@expo/vector-icons';
import {COLORS} from "./styles/Style";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused}) => {
                        let iconName;

                        if (route.name === 'A propos') {
                            iconName = 'user';
                        } else if (route.name === 'Rechercher') {
                            iconName = 'home';
                        }

                        return <Feather name={iconName} size={30} color={focused ? COLORS.primary : 'gray'}/>
                    }
                })}

                tabBarOptions={{
                    activeBackgroundColor: '#ffffff',
                    inactiveBackgroundColor: '#ffffff',

                    activeTintColor: COLORS.primary,
                    inactiveTintColor: 'gray',
                    labelStyle: {
                        fontSize: 16,
                    },
                    style: {
                        height: '7%',
                    }
                }}>
                <Tab.Screen name={"A propos"} component={About}/>
                <Tab.Screen name={"Rechercher"} component={SearchScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tab: {
        fontSize: 22,
    }
});
