import React, { useState, useEffect, useContext } from "react";
import { FlatList, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Eimage, Elist, Etext, Eview } from "./styles";

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
    <Eview>
      <FlatList
       
        data={episodes}

        
        renderItem={({item})=>(
          
          <TouchableHighlight {...item} onPress={() => {navigation.navigate('Details', item)}} underlayColor="#e79add" activeOpacity={0.8}>
          <Elist>
          <Eimage source={{uri: item.image?.medium}} />
          <Etext>{item.name}</Etext>
          </Elist>
          </TouchableHighlight>
          
        )}
        keyExtractor={item => item.id}
      />
    </Eview>
  );
}