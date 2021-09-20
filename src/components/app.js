import React, { Component} from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./pages/home";
import PageWrapper from "./PageWrapper";
export default class App extends Component{
    render(){
        return (
            <Router>
                <PageWrapper>
                    <Route
                    path="/"
                    component={Home}
                    />
                </PageWrapper>
            </Router>
    );
    }
}

const appDiv = document.getElementById("app");
render(<App />,appDiv);