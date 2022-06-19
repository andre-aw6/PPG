import React, { useState, useEffect } from "react";
import { View, Text, Button, Image } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";



export default function Details() {
    const [loading, setLoading] = useState(false); //set loading state
       
    const [info, setInfo] = useState([]); //set info state
    
    const route = useRoute(); //catches episode id info
    const id =(route.params.id);

    useEffect(()=>{

        const requestInfo = async () => {
          setLoading(true);
      
        const req = await fetch("https://api.tvmaze.com/episodes/"+id);
        const json = await req.json();
        
        if(json) {
          setInfo(json);
        }
          setLoading(false);
        }
        requestInfo();
      },[])

      const navigation = useNavigation();

      const handleBackButton = () => {
          navigation.navigate('Home');
      }

    return (
        <View>
          <Image source={{uri: info.image?.medium}} style={{width: 200, height: 100}} />
           <Text>Title: {info.name}</Text>
          <Text>Description: {info.summary}</Text>
          <Button title="Back" onPress={handleBackButton}/>
        </View>
      );
}