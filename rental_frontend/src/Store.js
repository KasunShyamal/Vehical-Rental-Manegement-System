import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from  "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer, userUpdateReducer } from './reducers/userRedusers';
import { deleteDetailsReducer, viewDetailsReducer } from './reducers/viewDetailsReducers';
import { addReducer, createAddReducer, updateAddReducer } from './reducers/addRedusers';

const reducer = combineReducers({
    //this will contain the reducer
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    customerList:viewDetailsReducer,
    deleteList:deleteDetailsReducer,
    userUpdate:userUpdateReducer,
    addList :addReducer,
    createAdd : createAddReducer,
    updateAdd : updateAddReducer,

})

//pass the all user data into a object
const userInfoFromStorage = localStorage.getItem("userInfo")?
    JSON.parse(localStorage.getItem("userInfo")):
    null;

    //pass the values
const initialState = {
    userLogin: {userInfo:userInfoFromStorage},
};

const middleware = [thunk];

// setting up the store
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;