import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './pages/About';
import SearchScreen from './pages/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { COLORS } from './styles/Style';

const Tab = createBottomTabNavigator();

// Todo : Leçon : Création et intégration de composant
// Todo : Exercice : Exercice créer deux pages pour la partie navigation
// Todo : Exercice : Créer un composant bouton customisé
// Todo : Leçon : Le style dans un composant
// Todo : Exercice : Styliser certaines parties de l'application
// Todo : Leçon : Navigation dans une appli et composant de navigation
// Todo : Exercice : Ajouter la navigation par bottom tabs.
// Todo : Leçon : Gestion des calls API et résolution des Promises
// Todo : Exercice : Faire les appels API et les mettre dans le bon ordre
// Todo : Exercice : Créer une troisième page
// Todo : Exercice : Mettre en place la deuxième navigation avec la troisième page
// Todo : Leçon : Gestion d'une ListView
// Todo : Exercice : Développer une ListView
// Todo : Exercice : Développer le rendu avec icône
// Todo : Exercice : Polissage de l'application 
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === 'A propos') {
                            iconName = 'user';
                        } else if (route.name === 'Rechercher') {
                            iconName = 'home';
                        }

                        return (
                            <Feather
                                name={iconName}
                                size={30}
                                color={focused ? COLORS.primary : 'gray'}
                            />
                        );
                    },
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
                    },
                }}
            >
                <Tab.Screen name={'A propos'} component={About} />
                <Tab.Screen name={'Rechercher'} component={SearchScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
