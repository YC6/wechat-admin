import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";
import Login from "./components/login/login";

class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Home</div>
        )
    }
};

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={Login} />
        <Route path="/login" component={Login} />
    </Router>
), document.getElementById("app"));