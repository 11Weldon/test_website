
import ProductCatalog from "./ProductCatalog";
import store from "../../../store";
import {Fragment} from "react";
import {Provider} from "react-redux";


export const Catalog = () => {

    return <div className="form-signin mt-5 text-center">
        <span></span>
        <Fragment>
            <Provider store={store}>
                <ProductCatalog></ProductCatalog>
            </Provider>
        </Fragment>
    </div>
}