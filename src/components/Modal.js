/*
* This modal is a portal which render HTML(from JSX or COMPONENT render function)
* from any component to outside root of react app.
* for this we need outside element <div id="modal-root"></div>
*
* */
import React from "react";
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("modal-root"); // GET outside element where you want to port component rendered html
class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

export default Modal;