import { CUSTOMER_LIST_FAIL, CUSTOMER_LIST_REQUEST, CUSTOMER_LIST_SUCCESS } from "../constants/viewDetailsConstants"
import axios from 'axios'

export const cusList = () => async (dispatch) =>{
    try {
        dispatch({
            type: CUSTOMER_LIST_REQUEST,
        });

        let data = await axios.get('http://localhost:8092/api/customer/getCustomer').
        then(function(response){
                return response;
        });

        

        dispatch({type:CUSTOMER_LIST_SUCCESS, payload: data});

    } catch (error) {
        const message = error.response && error.response.data.message?
            error.response.data.message:
            error.message;
        dispatch({type:CUSTOMER_LIST_FAIL, payload: message});
    }
}