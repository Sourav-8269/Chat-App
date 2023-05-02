import React, { useEffect, useState } from 'react';
import axios from "axios";

const Chat = () => {
    const [data,setData]=useState([]);
    const getData=()=>{
        axios.get("http://localhost:8080/chats")
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err));
    }

    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        {data.length>0&&data.map((el)=>(
            <h1 key={el._id} >{el.chatName}</h1>
        ))}
    </div>
  )
}

export default Chat