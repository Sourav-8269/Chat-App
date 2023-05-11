import * as types from "./actionTypes";
import axios from "axios";

const registerError=()=>{
    return {
        type:types.REGISTER_USER_ERROR
    }
}
const registerRequest=()=>{
    return {
        type:types.REGISTER_USER_REQUEST
    }
}

const registerSuccess=(token)=>{
    console.log(token)
    return {
        type:types.REGISTER_USER_SUCCESS,
        payload:token
    }
}

const loginError=()=>{
    return {
        type:types.POST_USER_ERROR
    }
}

const loginRequest=()=>{
    return {
        type:types.POST_USER_REQUEST
    }
}

const loginSuccess=(token)=>{
    console.log(token)
    return {
        type:types.POST_USER_SUCCESS,
        payload:token
    }
}

const register=(payload)=>dispatch=>{
    dispatch(registerRequest())
    return axios.post(`https://dark-ruby-angler.cyclic.app/users/register`,payload)
    .then((res)=>{
        console.log(res)
        dispatch(registerSuccess(res));
    })
    .catch((err)=>dispatch(registerError()))
}

const login=(payload)=>dispatch=>{
    dispatch(loginRequest())
    return axios.post(`https://dark-ruby-angler.cyclic.app/users/login`,payload)
    .then((res)=>{
        console.log(res.data)
        dispatch(loginSuccess(res.data));
    })
    .catch((err)=>dispatch(loginError()))
}



export {registerError,registerRequest,registerSuccess,loginError,loginRequest,loginSuccess,register,login}