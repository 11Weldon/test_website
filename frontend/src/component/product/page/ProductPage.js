import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import ProductDetail from "./ProductDetail";
import {Provider} from "react-redux";
import store from "../../../store";
import ProductCatalog from "../catalog/ProductCatalog";

export const ProductPage = () => {
    const [message, setMessage] = useState('');


    return <div className="form-signin mt-5 text-center">
        <span></span>
        <Fragment>
            <Provider store={store}>
                <ProductDetail></ProductDetail>
            </Provider>
        </Fragment>

    </div>
}