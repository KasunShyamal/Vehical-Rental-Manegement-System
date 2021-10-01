import axios from "axios"
import { ADD_LIST_FAIL, ADD_LIST_REQUEST, ADD_LIST_SUCCESS } from "../constants/addConstants"

export const listAdds = () => async(dispatch, getState) =>{
    try {
        dispatch({
            type:ADD_LIST_REQUEST,
        });

        const{
            userLogin: {userInfo},
        } = getState();

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.data.token}`,
            },
        };

        let  data = await axios.get(`http://localhost:8092/api/add`,config).
            then(function(response){
                       
                return response;
            });
            
        dispatch({
            type: ADD_LIST_SUCCESS,
            payload: data,
        })

    } catch (error) {
        const message = error.response && error.response.data.message?
        error.response.data.message:
        error.message;
    dispatch({type:ADD_LIST_FAIL, payload: message});
    }
}