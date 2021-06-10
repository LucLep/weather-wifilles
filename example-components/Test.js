import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Test = ({ title = 'Hello World' }) => {
    return (
        <View style={styles.container}>
            <Text>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
});

export { Test };
