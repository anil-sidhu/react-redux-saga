// import {createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer';


// const store = createStore(rootReducer);
const store  = configureStore({reducer:rootReducer})

export default store;