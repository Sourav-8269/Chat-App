import {applyMiddleware, legacy_createStore,combineReducers} from "redux";
import { reducer as UserReducer} from "./User/reducer";
import {reducer as JobReducer} from "./Job/reducer"
import thunk from "redux-thunk"

const rootReducer=combineReducers({JobReducer,UserReducer});

const store=legacy_createStore(rootReducer,applyMiddleware(thunk));


export {store};