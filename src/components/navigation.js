import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Navigation extends Component {
    componentDidMount() {
        window.GLOBAL_FUNCTIONS.applyAllFunctions();
    }
    render() {
        return (
            <aside id="fh5co-aside" role="complementary" className="border js-fullheight">
                <h1 id="fh5co-logo"><a href="index.html">Marble</a></h1>
                <nav id="fh5co-main-menu" role="navigation">
                    <ul>
                        <li><NavLink to="/home" activeClassName="fh5co-active">Home</NavLink></li>
                        <li><NavLink to="/blog" activeClassName="fh5co-active">blog</NavLink></li>
                        <li><NavLink to="/portfolio" activeClassName="fh5co-active">portfolio</NavLink></li>
                        <li><NavLink to="/about" activeClassName="fh5co-active">about</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="fh5co-active">contact</NavLink></li>
                    </ul>
                </nav>

                <div className="fh5co-footer">
                    {/*<p><small>&copy; 2016 Blend Free HTML5. All Rights Reserved.</span> <span>Designed by <a href="http://freehtml5.co/" target="_blank">FreeHTML5.co</a> </span> <span>Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash</a></span></small></p>*/}
                    <ul>
                        <li><a href="#"><i className="icon-facebook2"></i></a></li>
                        <li><a href="#"><i className="icon-twitter2"></i></a></li>
                        <li><a href="#"><i className="icon-instagram"></i></a></li>
                        <li><a href="#"><i className="icon-linkedin2"></i></a></li>
                    </ul>
                </div>
            </aside>
        );
    }
}

export default Navigation;
