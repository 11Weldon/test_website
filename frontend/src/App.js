import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';


import Header from './component/layout/Header';
import {Login} from "./component/auth/login";
import {Logout} from "./component/auth/logout";
import {Registration} from "./component/auth/register";
import {Home} from "./component/home"
import {ProductPage} from "./component/product/page/ProductPage"

import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Catalog} from "./component/product/catalog/catalog";
import ProductCatalog from "./component/product/catalog/ProductCatalog";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header></Header>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/catalog" element={<ProductCatalog/>}/>
                    <Route path="/catalog/:id" element={<ProductPage/>}/>
                </Routes>
            </BrowserRouter>
            )

    }
}

// ReactDOM.render(<App />, document.getElementById('app'));
export default App