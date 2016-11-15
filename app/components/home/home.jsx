import React from "react";
import Header from "../header/header";
import Asider from "../asider/asider";

export default class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="wrap">
                <Header />
                <Asider />
            </div>
        )
    }
}