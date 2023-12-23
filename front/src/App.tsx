import React, { Component } from 'react'
import './App.css'
import { observer, inject } from 'mobx-react'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";


class App extends Component{
    render() {
        return (
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        )
    }
}

export default App