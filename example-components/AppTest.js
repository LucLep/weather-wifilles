import React from 'react';
import { View } from 'react-native';
import { Test } from './Test';

const AppTest = () => {
    const exempleFunction = () => {
        console.log('Hello World');
    };
    return (
        <View>
            <Test title={'Hello'} />
        </View>
    );
};