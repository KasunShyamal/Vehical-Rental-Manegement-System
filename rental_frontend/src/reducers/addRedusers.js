import { ADD_LIST_FAIL, ADD_LIST_REQUEST, ADD_LIST_SUCCESS } from "../constants/addConstants";

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