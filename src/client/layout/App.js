import React from 'react'
import {BrowserRouter} from "react-router-dom"
import {Switch,Route,NavLink} from "react-router-dom"

const App = () => {
    return(
        <>
            <header>
                <h1>Titulo</h1>
                <nav>
                    <NavLink to="/uno">pagina 1</NavLink>
                    <NavLink to="/dos">pagina 2</NavLink>
                    <NavLink to="/tres">pagina 3</NavLink>
                </nav>
            </header>
            <main>
                <Switch>
                    <Route path="/uno" exact>
                        <p>Uno</p>
                    </Route>

                    <Route path="/dos" exact>
                        <p>Dos</p>
                    </Route>

                    <Route path="/tres" exact>
                        <p>Tres</p>
                    </Route>
                </Switch>
            </main>
        </>
    )
}

export default App