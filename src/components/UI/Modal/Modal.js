import classes from "./Modal.module.css";
import React from "react";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} onDismiss={props.modalClosed} />
      <div
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
        className={classes.Modal}
      >
        {props.children}
      </div>
    </>
  );
};

export default React.memo(
  Modal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
