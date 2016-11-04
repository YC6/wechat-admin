import "./main.scss";
import 'antd/dist/antd.css';
import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/login";
import { DatePicker } from "antd";

class App extends React.Component{
    constructor(props) {
        super(props);
        // this.state = {"keyword": ""};
        // this.refreshKeyword = this.refreshKeyword.bind(this);
    }

    // refreshKeyword(name) {
    //     this.setState({"keyword": name});
    // }

    render() {
        return (
            <div className="login-wrap">
                <div className="login">
                    <DatePicker />
                </div>
            </div>
        )
    }
};

const app = document.createElement("div");

document.body.appendChild(app);

ReactDOM.render(<App />, app);