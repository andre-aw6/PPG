import React, { useState, useEffect } from "react";
import { Sview, Stitle, Stext, Simage, Stview } from "./styles";

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
    <Sview>
      <Simage source={{uri: info.image?.medium}} />
      <Stitle>{info.name}</Stitle>
      <Stview>
      <Stext> {info.summary}</Stext>
      </Stview>
    </Sview>
  );
}

export default Show;