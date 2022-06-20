import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Dtext, Dtitle, Dview, Dimage, Dtview } from "./styles";
import { Button } from "react-native";



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

     

    return (
        <Dview>
          <Dimage source={{uri: info.image?.medium}} />
           <Dtitle>{info.name}</Dtitle>
           <Dtview>
              <Dtext>{info.summary}</Dtext>
            </Dtview>
           
            <Button color="#ffffff" title='Home' onPress={() => {navigation.navigate('Home')}}  />
           
          
            
        </Dview>
      );
}