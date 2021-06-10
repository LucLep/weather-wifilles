import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles/Style';

class CustomButton extends React.Component {
    render() {
        const { title, onClick } = this.props;

        return (
            <TouchableOpacity style={styles.container} onPress={onClick}>
                <Text style={styles.title}>{title.toUpperCase()}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
    },
    title: {
        color: 'white',
    },
});

export default CustomButton;