import React from 'react'
import {Switch,Route} from "react-router-dom"
import Contacto from '../pages/Contacto'
import Demos from '../pages/Demos'
import DemoDetail from "../pages/DemoDetail"
import Home from "../pages/Home"
import Header from './Header'

const App = () => {
    return(
        <>
            <Switch>
                <Route path="/" exact>
                    <Home/>
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
        </>
    )
}

export default App