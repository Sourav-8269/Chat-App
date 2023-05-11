import * as types from "./actionTypes"
const initState={
    token:{},
    isLoading:false,
    isError:false
}

const reducer=(state=initState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.REGISTER_USER_ERROR:
            return {
                ...state,isLoading:false,isError:true
            }
        case types.REGISTER_USER_REQUEST:
            return{
                ...state,isLoading:true
            }
        case types.REGISTER_USER_SUCCESS:
            console.log(payload)
            return{
                ...state,isLoading:false
            }
        case types.POST_USER_ERROR:
            return {
                ...state,isLoading:false,isError:true
            }
        case types.POST_USER_REQUEST:
            return{
                ...state,isLoading:true
            }
        case types.POST_USER_SUCCESS:
            console.log(payload)
            return{
                ...state,isLoading:false,token:payload.token
            }
        default:
            return state
    }
}
export {reducer};