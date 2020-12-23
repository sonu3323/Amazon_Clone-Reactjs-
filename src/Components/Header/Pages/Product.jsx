import React from "react";
import "./Product.css";
import { Button, formatMs } from "@material-ui/core";
import { useStateValue } from "../../stateProvider";
import fmt from "indian-number-format";

const Product = ({ image, price, title, rating, name, id }) => {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    return dispatch({
      type: "ADD_TO_BASKET",
      payload: { id, image, price, title, rating, name },
    });
  };

  return (
    <>
      <div className="product">
        <div className="card">
          <img className="card__img" src={image} alt="Denim Jeans" />
          <div className="card__body">
            <h2>{name}</h2>
            <p className="price"> &#x20b9; {fmt.format(price)} </p>
            <p>{title}</p>
            <div className="card__rating">
              {Array(rating)
                .fill()
                .map((_) => {
                  return <p>❤</p>;
                })}
            </div>
          </div>
          <Button
            onClick={addToBasket}
            className="card__button"
            variant="contained"
          >
            Add Cart
          </Button>
        </div>
      </div>
    </>
  );
};

export default Product;
