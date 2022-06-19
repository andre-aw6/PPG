import React, { useState, useEffect } from "react";
import { Text, View, Button, Image } from "react-native";

const Show = () => {
const [loading, setLoading] = useState(false);
const [info, setInfo] = useState([]);

useEffect(()=>{
  const requestInfo = async () => {
    setLoading(true);

  const req = await fetch("https://api.tvmaze.com/shows/6771");
  const json = await req.json();
  
  if(json) {
    setInfo(json);
  }
    setLoading(false);
  }
  requestInfo();
},[])

  return (
    <View>
      <Image source={{uri: info.image?.medium}} style={{width: 200, height: 100}} />
      <Text>Title: {info.name}</Text>
      <Text>Description: {info.summary}</Text>
    </View>
  );
}

export default Show;