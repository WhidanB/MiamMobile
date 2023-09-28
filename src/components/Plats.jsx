import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './Card';

const Plats = (meal) => {
    const [data, setData] = useState([]);
    const rand = Math.floor(Math.random() * 8);
    
        useEffect(() => {
          
          setData(meal.meal);
      
        
        });
        
        return (

        

        <View>
            <Text style={styles.title}>Plats</Text>
            <ScrollView contentContainerStyle={styles.list}>
                {
                data
                .slice(rand, rand+5)
                .map((meal, index)=>(
                    <Card key={index} meal={meal} />
                    ))
                }
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    main:{
      flex: 6,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 50,
    },
    container: {
      flex: 1,
      backgroundColor: 'salmon',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: 35,
      paddingBottom: 35,
      paddingTop: 35,
      gap: 30,
    },
    list:{
      gap: 50,
    },
    title:{
      fontSize: 36,
      color: '#fff'
    }
    
  });

export default Plats;