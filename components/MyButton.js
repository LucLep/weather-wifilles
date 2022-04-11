import React from 'react'
import { TouchableOpacity , Text, StyleSheet } from 'react-native'
import { COLORS } from '../styles/Style'


const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        padding: 10,
    }, 
    title: {
        color: 'white',
    }
})

const MyButton = ({ title, doSomething }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={doSomething}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MyButton