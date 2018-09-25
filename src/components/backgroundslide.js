import React, { Component } from "react";
import Modal from "./Modal";

class BackgroundSlide extends Component {
    render() {
        return (
            <Modal>
                <ul className="cb-slideshow">
                    <li><span>Image 01</span><div><h3>Design</h3></div></li>
                    <li><span>Image 02</span><div><h3>Build</h3></div></li>
                    <li><span>Image 03</span><div><h3>Remodel</h3></div></li>
                    <li><span>Image 04</span><div><h3>By</h3></div></li>
                    <li><span>Image 05</span><div><h3>Design</h3></div></li>
                    <li><span>Image 06</span><div><h3>Shastra</h3></div></li>
                </ul>
            </Modal>
        );
    }
}

export default BackgroundSlide;
