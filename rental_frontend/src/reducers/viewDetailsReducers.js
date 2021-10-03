import { CUSTOMER_DELETE_FAIL, CUSTOMER_DELETE_REQUEST, CUSTOMER_LIST_FAIL, CUSTOMER_LIST_REQUEST, CUSTOMER_LIST_SUCCESS } from "../constants/viewDetailsConstants";

export const viewDetailsReducer=(state={ cusInfo:[] },action) =>{
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


export const deleteDetailsReducer=(state={},action) =>{
    switch (action.type) {
        case CUSTOMER_DELETE_REQUEST:
            return{loading: true};
        
        case CUSTOMER_LIST_SUCCESS:
            return{loading: false, success: true};
        
        case CUSTOMER_DELETE_FAIL:
            return{loading: false, error: action.payload, success: false};  
    
        default:
            return state;
            
    }
};