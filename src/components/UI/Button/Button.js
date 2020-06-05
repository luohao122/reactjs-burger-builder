import classes from "./Button.module.css";
import React from "react";
import PropTypes from "prop-types";

const Button = (props) => (
  <button
    type={props.btnKind}
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

Button.propTypes = {
  btnType: PropTypes.string,
};

export default Button;
