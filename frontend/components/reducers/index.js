import {combineReducers} from "redux"
import Userdetails from "./userreducer"
import {createStore} from 'redux';
const allReducers = combineReducers({

    Userdetails:Userdetails,

});

export default createStore(allReducers);
