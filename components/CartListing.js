import React, { Fragment } from "react";
import Image from "next/image";
// import CartContext from "./cart-context";
import classes from "./CartListing.module.css";

const CartListing = (props) => {
  const addEventHandler = () => {
    props.onAdd(props.items);
  };
  //console.log(props.imgURL);

  //console.log(cartctx.addItem);

  return (
    <Fragment>
      <div key={props.id} className={classes.cart__row}>
        <div className={classes.cart__content}>
          <div className={classes.cart__image}>
            <Image
              src={props.imgURL}
              alt={props.title}
              width="100"
              height="100"
            ></Image>
          </div>
          <div className={classes.cart__title}>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
          </div>
        </div>
        <div className={classes.cart__price}>
          {"$ "}
          {props.price}
        </div>
        <div type="button" className={classes.cart__addtocart}>
          <button type="button" onClick={addEventHandler}>
            add to cart
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CartListing;
