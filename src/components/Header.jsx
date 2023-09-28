import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🥗Miam Miam🥩</Text>
            <TextInput style={styles.search} placeholder='Search'/>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        gap: 35,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title:{
        fontSize: 50,
        color: 'salmon'
    },
    search:{
        textAlign: 'center',
        padding: 3,
        borderColor: 'salmon',
        borderWidth: 2,
        borderRadius: 15,
        width: 150

    }
})

export default Header;