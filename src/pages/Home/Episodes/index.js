import React, { useState, useEffect, useContext } from "react";
import { Text, View, TouchableHighlight, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { LoaderContext } from "../../../contexts/LoaderContext";

export default function Episodes () {
  const [loading, setLoading] = useContext(LoaderContext);
  const [episodes, setEpisodes] = useState([]);

  useEffect(()=>{
      const requestEpisodes = async () => {
      setLoading(true);
      const req = await fetch("https://api.tvmaze.com/shows/6771/episodes");
      const json = await req.json();      
      
        if(json) {
          setEpisodes(json);
        }
        setLoading(false);    
      }
      requestEpisodes();
    },[])

   
  const navigation = useNavigation();
 

  return (
    <View>
      <FlatList
        data={episodes}

        
        renderItem={({item})=>(
          <TouchableHighlight {...item} onPress={() => {navigation.navigate('Details', item)}} >
          <>
          <Image source={{uri: item.image?.medium}} style={{width: 100, height: 50}} />
          <Text>{item.name}</Text>
          </>
          </TouchableHighlight>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}