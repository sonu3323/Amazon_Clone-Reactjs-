import React from "react";
import NavBar from "../NavBar";
import "./Home.css";
import Product from "./Product";
import { electronics, fashion } from "../../StoreProducts";
import Footer from "./Footer";
import { images } from "./headerImages";

const image = images[Math.floor(Math.random() * images.length)];

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home">
        <img className="home__img" src={image} alt="home logo" />
        {/* Products , price , description and button */}
        <div className="home__product">
          <h1 className="card__title">Electronics</h1>
          <div className="card__row">
            {electronics.map(({ id, title, image, rating, name, price }) => {
              return (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  rating={rating}
                  name={name}
                  price={price}
                />
              );
            })}
          </div>

          <h1 className="product__fashion">Amazon Fashion</h1>
          <div className="card__row">
            {fashion.map(({ id, title, image, rating, name, price }) => {
              return (
                <Product
                  key={id}
                  id={id}
                  title={title}
                  image={image}
                  rating={rating}
                  name={name}
                  price={price}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
