import { useEffect, useState } from 'react';
import {StyleSheet, Text, View, ScrollView } from 'react-native';

import axios from 'axios';
import Card from './src/components/Card';
import Header from './src/components/Header';
import Plats from './src/components/Plats';

export default function App() {

  const [data, setData] = useState([]);
  const rand = Math.floor(Math.random() * 8);


  useEffect(()=>{
axios
.get("https://www.themealdb.com/api/json/v1/1/search.php?s=Chicken")
.then((res) =>setData(res.data.meals));

  },[])

  return (

      <View  style={styles.main}>
        <Header/>
        <View style={styles.container}>
          <Plats meal={data}/>
        </View>
      </View>

  );
}

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
