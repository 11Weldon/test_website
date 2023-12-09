import axios from 'axios';
import { GET_PRODUCT_LIST, ADD_PRODUCT, DELETE_PRODUCT, TOGGLE_PRODUCT, GET_PRODUCT } from './types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';

// Get product list
export const getProducts = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/catalog/')
        .then(result => {
            dispatch({
                type: GET_PRODUCT_LIST,
                payload: result.data
            });
        }).catch(error => console.log(error));
};


export const getProduct = (id) => dispatch => {
    axios.get(`http://127.0.0.1:8000/api/catalog/${id}/`)
        .then(result => {
            dispatch({
                type: GET_PRODUCT,
                payload: result.data
            });
        }).catch(error => console.log(error));
};

//Delete product
export const deleteProduct = (id) => dispatch => {
    axios.delete(`http://127.0.0.1:8000/api/catalog/${id}/`)
        .then(result => {
            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            });
        }).catch(error => console.log(error));
};

//Toggle product
export const toggleProduct = (product) => dispatch => {
    axios.put(`http://127.0.0.1:8000/api/catalog/${product.id}/`, product)
        .then(result => {
            dispatch({
                type: TOGGLE_PRODUCT,
                payload: result.data
            });
        }).catch(error => console.log(error));
};

//Add product
export const addProducts = (product) => dispatch => {
    axios.post('http://127.0.0.1:8000/api/catalog/', product)
        .then(result => {
            dispatch({
                type: ADD_PRODUCT,
                payload: result.data
            });
        }).catch(error => console.log(error));
};