import React from 'react';
import { Image, Text, View, StyleSheet, TouchableWithoutFeedback, Pressable } from 'react-native';

const Card = (meal) => {
    return (
        <Pressable
        onPress={()=>console.log("click")}
        >
            <View style={styles.container} meal={meal}>
                <Image style={{width: '100%', height: '80%'}} source={{uri: meal.meal.strMealThumb}}/>
                <View style={styles.texte}>
                    <Text style={styles.font}>{meal.meal.strMeal}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 300,
        width: '100%',
        borderRadius: 15,
        borderColor: '#fff',
        borderWidth: 2,
        overflow: 'hidden'
    },
    texte:{
        flex:6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    font:{
        fontSize: 24,
        color: 'salmon',
      }
});

export default Card;