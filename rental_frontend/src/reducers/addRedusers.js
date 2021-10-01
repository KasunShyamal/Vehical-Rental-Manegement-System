import { ADD_CREATE_FAIL, ADD_CREATE_REQUEST, ADD_CREATE_SUCCESS, ADD_LIST_FAIL, ADD_LIST_REQUEST, ADD_LIST_SUCCESS } from "../constants/addConstants";

export const addReducer=(state={ add: [] },action) =>{
    switch (action.type) {
        case ADD_LIST_REQUEST:
            return{loading: true};
        
        case ADD_LIST_SUCCESS:
            return{loading: false, add: action.payload};
        
        case ADD_LIST_FAIL:
            return{loading: false, error: action.payload};  
    
        default: 
            return state;
            
    }
};

export const createAddReducer = (state = {}, action) =>{
    switch (action.type) {
        case ADD_CREATE_REQUEST:
            return{loading: true};
        
        case ADD_CREATE_SUCCESS:
            return{loading: false, success: true};
        
        case ADD_CREATE_FAIL:
            return{loading: false, error: action.payload};  
        
        default:
            return state;
            
    }
}
