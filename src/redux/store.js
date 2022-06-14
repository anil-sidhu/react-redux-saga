import {createStore} from 'redux'

const dummyReducer =()=>{
    return 100;
}
const store = createStore(dummyReducer);

export default store;