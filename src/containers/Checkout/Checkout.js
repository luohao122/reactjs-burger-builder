import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

const Checkout = (props) => {
  const onCheckoutCancel = () => {
    props.history.goBack();
  };

  const onCheckoutContinued = () => {
    props.history.replace("/checkout/contact-data");
  };

  let summary = <Redirect to="/" />;
  if (props.ings) {
    const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null;
    summary = (
      <>
        {purchasedRedirect}
        <CheckoutSummary
          onCheckoutCancel={onCheckoutCancel}
          onCheckoutContinued={onCheckoutContinued}
          ingredients={props.ings}
        />
        <Route
          path={`${props.match.path}/contact-data`}
          component={ContactData}
        />
      </>
    );
  }
  return summary;
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(Checkout);
