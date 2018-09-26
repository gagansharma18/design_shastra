import React, { Component } from "react";
import { BrowserRouter, Route, Switch,Redirect } from "react-router-dom";
import Home from "./components/home";
import BackgroundSlide from "./components/backgroundslide";
import Portfolio from "./components/portfolio";
import Navigation from "./components/navigation";
import Blog from "./components/blog";



class App extends Component {
    render() {
        return (
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div>
                    <Route path="/" component={BackgroundSlide} />
                    <Route path="/" component={Navigation} />
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/blog" component={Blog} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;