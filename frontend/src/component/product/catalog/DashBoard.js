import React, { Fragment } from 'react';
// import Form from './Form';
// import List from './List';
import ProductCatalog from "./ProductCatalog";
import {Provider} from "react-redux";
import store from "../../../store";
import List from "../List";

export default function DashBoard() {
    return (
        <Fragment>
            <Provider store={store}>
                <ProductCatalog />
            </Provider>
        </Fragment>
    )
}