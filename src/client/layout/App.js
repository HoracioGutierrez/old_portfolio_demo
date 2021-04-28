import React from 'react'
import {Switch,Route} from "react-router-dom"
import Contacto from '../pages/Contacto'
import Demos from '../pages/Demos'
import DemoDetail from "../pages/DemoDetail"
import Home from "../pages/Home"
import Header from './Header'
import PlaygroundRouter from '../pages/PlaygroundRouter'
import { ToastContainer } from 'react-toastify'

const App = () => {
    return(
        <>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/p/:slug">
                    <PlaygroundRouter/>
                </Route>
                <Route path="*">
                    <Header/>
                </Route>
            </Switch>
            <Switch>
                <Route path="/demos" exact>
                    <Demos/>
                </Route>

                <Route path="/demos/:slug" exact>
                    <DemoDetail/>
                </Route>

                <Route path="/contacto" exact>
                    <Contacto/>
                </Route>
            </Switch>
            <ToastContainer/>
        </>
    )
}

export default App