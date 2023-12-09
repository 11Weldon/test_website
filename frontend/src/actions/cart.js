import axios from 'axios';
import {
    GET_CART,
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_TO_CART,
    DELETE_CART,
    GET_PRODUCT_LIST,
    DELETE_PRODUCT
} from './types';

axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';
const url='http://127.0.0.1:8000/'

export const getCart = () => dispatch => {
    axios.get(url+'api/cart/')
        .then(result => {
            dispatch({
                type: GET_CART,
                payload: result.data
            });
        }).catch(error => console.log(error));
};

export const deleteProductToCart = (id) => dispatch => {
    axios.delete(url+`api/cart/${id}/`)
        .then(result => {
            dispatch({
                type: DELETE_PRODUCT_TO_CART,
                payload: id
            });
        }).catch(error => console.log(error));
};

