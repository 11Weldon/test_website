import { GET_PRODUCT_LIST, ADD_PRODUCT, DELETE_PRODUCT, TOGGLE_PRODUCT, GET_PRODUCT } from '../actions/types';

const initialState = {
    product: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return {
                ...state,
                product: action.payload
            };
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                product: state.product.filter(product => product.id !== action.payload)
            };
        case TOGGLE_PRODUCT:
            return {
                ...state,
                product: [...state.product]
            };
        case ADD_PRODUCT:
            return {
                ...state,
                product: [...state.product, action.payload]
            };
        default:
            return state;
    }
};