import { useDispatch } from "react-redux";
import * as types from "./actionTypes";
import axios from "axios";

const getRequest=()=>{
    return {
        type:types.GET_REQUEST
    }
}

const getSuccess=(token)=>{
    return {
        type:types.GET_SUCCESS,
        payload:token
    }
}

const getError=()=>{
    return {
        type:types.GET_ERROR
    }
}

const getData=()=>(dispatch)=>{
    dispatch(getRequest())
    axios.get(`https://dark-ruby-angler.cyclic.app/jobs`)
    .then((res)=>{
        console.log(res.data)
        dispatch(getSuccess(res.data))
    })
    .catch((err)=>dispatch(getError()))
}

const filterData=(category)=>(dispatch)=>{
    console.log(category)
      axios.get(`https://dark-ruby-angler.cyclic.app/jobs?location=${category}`)
      .then((res)=>{
          console.log(res)
          dispatch(getSuccess(res.data))
      })
      .catch((err)=>console.log(err));
  }

  const filtercontrat=(category)=>(dispatch)=>{
    console.log(category)
      axios.get(`https://dark-ruby-angler.cyclic.app/jobs?contract=${category}`)
      .then((res)=>{
          console.log(res)
          dispatch(getSuccess(res.data))
      })
      .catch((err)=>console.log(err));
  }
  
    const searchData=(search)=>(dispatch)=>{
      if(search==""){
        alert("Use Search Box")
        return;
      }
      console.log(search)
      return axios.get(`https://dark-ruby-angler.cyclic.app/jobs/search?q=${search}`)
        .then((res)=>{
            console.log(res)
            dispatch(getSuccess(res.data))
        })
        .catch((err)=>console.log(err));
    }


export {getError,getRequest,getSuccess,getData,searchData,filterData,filtercontrat}