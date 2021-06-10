import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles/Style';
import CustomButton from '../components/CustomButton';

const About = ({ navigation }) => {
  const goToSearch = () => navigation.navigate('Rechercher');

    return (
        <View style={styles.view}>
            <Text style={styles.title}>A propos de l'application</Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque congue nisi
                purus, porta interdum arcu faucibus in. Nunc euismod lacus tellus, ut pulvinar sem
                imperdiet ac. Curabitur eu neque in enim dapibus suscipit.
            </Text>
            <View style={styles.buttonContainer}>
                <Button
                    color={COLORS.primary}
                    onPress={goToSearch}
                    title={'Rechercher'}
                />
            </View>
            {/* A développer et faire pendant un exercice */}
            <CustomButton onClick={goToSearch} title={'Rechercher'} />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        margin: 20,
        marginTop: 50,
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 10,
    },
});

export default About;