import axios from "axios"
import { ADD_CREATE_FAIL, ADD_CREATE_REQUEST, ADD_CREATE_SUCCESS, ADD_LIST_FAIL, ADD_LIST_REQUEST, ADD_LIST_SUCCESS, ADD_UPDATE_FAIL, ADD_UPDATE_REQUEST, ADD_UPDATE_SUCCESS } from "../constants/addConstants"

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

export const createAddAction = 
(Name, Type, Email, ConNumber, Location, Description) => async (dispatch, getState) =>{
    try {
        dispatch({
            type: ADD_CREATE_REQUEST,
        });

        const {
            userLogin: {userInfo},
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.data.token}`,
            },
        };

        let  data = await axios.post(`http://localhost:8092/api/add/create`,
                    {Name, Type, Email, ConNumber,Location,  Description},config).
        then(function(response){
                   
            return response;
        });

        dispatch({
            type: ADD_CREATE_SUCCESS,
            payload: data,
        });
    }
    catch(error){
        const message = error.response && error.response.data.message?
        error.response.data.message:
        error.message;
    dispatch({type:ADD_CREATE_FAIL, payload: message});
    }
}

export const updateAddAction = 
(id, Name, Type, Email, ConNumber, Location, Description) => async(dispatch, getState) =>{
    try {
        dispatch({
            type: ADD_UPDATE_REQUEST,
        });

        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${userInfo.data.token}`,
            },
        };

        let  data = await axios.put(`http://localhost:8092/api/add/${id}`,
                    {Name, Type, Email, ConNumber,Location,  Description},config).
        then(function(response){
                   
            return response;
        });

        dispatch ({
            type : ADD_UPDATE_SUCCESS,
            payload: data,
        });


    } catch (error) {
        const message = error.response && error.response.data.message?
        error.response.data.message:
        error.message;
    dispatch({type:ADD_UPDATE_FAIL, payload: message});
    }
};



