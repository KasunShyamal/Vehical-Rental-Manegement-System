import { CUSTOMER_LIST_FAIL, CUSTOMER_LIST_REQUEST, CUSTOMER_LIST_SUCCESS } from "../constants/viewDetailsConstants";

export const viewDetailsReducer=(state={ cusInfo:[]},action) =>{
    switch (action.type) {
        case CUSTOMER_LIST_REQUEST:
            return{loading: true};
        
        case CUSTOMER_LIST_SUCCESS:
            return{loading: false, cusInfo: action.payload};
        
        case CUSTOMER_LIST_FAIL:
            return{loading: false, error: action.payload};  
    
        default:
            return state;
            
    }
};