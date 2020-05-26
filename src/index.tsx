import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage.tsx"

ReactDOM.render(
    <Router>
        <Navbar />
        <Switch>
            <Route path="/"><HomePage /></Route>
        </Switch>
    </Router>,
    document.getElementById("root")
)
