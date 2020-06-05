import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";
import React from "react";

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="logo" />
    </div>
  );
};

export default Logo;
