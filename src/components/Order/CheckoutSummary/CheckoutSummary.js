import classes from "./CheckoutSummary.module.css";
import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.onCheckoutCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.onCheckoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
