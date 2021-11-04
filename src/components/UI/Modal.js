import React from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
const BackDrop = (props) => {
  return <div onClick={props.onCloseClick} className={classes.backdrop}></div>;
};
const OverLay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onCloseClick={props.onCloseClick}></BackDrop>,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <OverLay>{props.children}</OverLay>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};
export default Modal;