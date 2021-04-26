import React from 'react'
import ReactDOM from 'react-dom'
import App from "./layout/App"
import {BrowserRouter} from "react-router-dom"
import "./index.less"

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById("root")
)