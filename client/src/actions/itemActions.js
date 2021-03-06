// This is where we make our requests to the backend
import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
    // return {
    //  type: GET_ITEMS
    // }
    dispatch(setItemsLoading());
    axios
        .get(`${process.env.REACT_APP_API_URL}/api/items`)
        .then(res =>
            dispatch({
                type: GET_ITEMS,
                payload: res.data
            })
        );
};

export const addItem = item => dispatch => {
    axios
        .post(`${process.env.REACT_APP_API_URL}/api/items`, item)
        .then(res =>
            dispatch({
                type: ADD_ITEM,
                payload: res.data
            })
        )
};

export const deleteItem = id => dispatch => {
    axios
        .delete(`${process.env.REACT_APP_API_URL}/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_ITEM,
                payload: id
            })
        );
};

export const setItemsLoading = () => {
    return {
        type: ITEMS_LOADING
    };
};