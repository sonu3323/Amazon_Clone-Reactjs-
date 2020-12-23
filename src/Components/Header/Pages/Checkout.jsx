import React, { useState } from "react";
import NavBar from "../NavBar";
import "./Checkout.css";
import { Paper, Button, Grid } from "@material-ui/core";
import { useStateValue } from "../../stateProvider";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import fmt from "indian-number-format";
import { Link } from "react-router-dom";
import OrderSuccess from "./OrderSuccess";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  console.log(basket.id);

  const [orderSuccess, setOrderSuccess] = useState(false);

  const removeItem = (id) => {
    dispatch({
      type: "REMOVE ITEM FROM BASKET",
      payload: id,
    });
  };

  const totalAmount = () => {
    let amount = 0;
    basket.map(({ price }) => {
      amount += price;
    });
    return amount;
  };

  return (
    <>
      <NavBar />
      <div className="checkout__header">
        <img
          className="checkout__headerImg"
          src="https://www.amazon.in/images/G/31/IN-hq/2020/img/Certified_Refurbished/XCM_Manual_1500x300_1216785_in_certified_refurbished_renewed_mobiles_category_1093f42a_fae7_4c3c_bd5e_35fb0bd1b71e_jpg_LOWER_QL85_.jpg"
          alt=""
        />
      </div>

      {basket.length === 0 && (
        <div className="checkout__empty">
          {user && (
            <div>
              <h1 className="checkout__emptyText">
                Oops Your shopping Cart Is Empty {}{" "}
                <span>
                  <ShoppingCart className="checkout__emptyCart" />
                </span>
              </h1>
            </div>
          )}
        </div>
      )}

      {user ? (
        <div className="checkout">
          <div className="checkout__details">
            {basket.length > 0 && <h1>Your Shopping Cart</h1>}

            <Grid item sm={12}>
              {basket.map(({ id, image, price, rating, title }) => {
                return (
                  <Paper elevation={3} key={id}>
                    <div className="chekcout__cart">
                      <img className="checkout__img" src={image} alt="" />
                      <div className="checkout__body">
                        <h2>{title}</h2>
                        <h2 className="checkout__price">
                          {" "}
                          &#x20b9; {fmt.format(price)}
                        </h2>
                        <div className="card__rating">
                          {Array(rating)
                            .fill()
                            .map((_) => {
                              return <p>❤</p>;
                            })}
                        </div>
                        <Button
                          variant="outlined"
                          onClick={() => removeItem(id)}
                          className="checkout__button"
                        >
                          Remove Item
                        </Button>
                      </div>
                    </div>
                  </Paper>
                );
              })}
            </Grid>
          </div>
          {basket.length !== 0 && (
            <div className="checkout__summary">
              <h3>
                Amount ({basket.length}) items :{" "}
                <span> &#x20b9; {fmt.format(totalAmount())}</span>{" "}
              </h3>
              <p className="chekcout__summaryPrice">
                This order contains a gift voucher
              </p>
              <Button
                className="checkout__button"
                variant="outlined"
                onClick={() => setOrderSuccess(true)}
              >
                Pay
              </Button>
            </div>
          )}
        </div>
      ) : (
        <div className="checkout__loginCheck">
          <h1> Sign-in for checkout</h1>
          <Link className="checkout__link" to="/login">
            <Button className="checkout__button" variant="outlined">
              Sign in
            </Button>
          </Link>
        </div>
      )}

      {orderSuccess && <OrderSuccess />}
    </>
  );
};

export default Checkout;
