import React from "react";
import classes from "./CartFooter.module.css";
import Image from "next/image";
import ShoppingCart from "../img/shopping-cart.png";

const CartFooter = (props) => {
  return (
    <div className={classes.cart__footer}>
      <div className={classes.footer__section}>
        <div className={classes.cart__content}>
          <Image
            src={ShoppingCart}
            alt="shopping cart"
            width="30"
            height="30"
          ></Image>
        </div>

        <div className={classes.cart__price}>
          {"$ "}
          {props.addPrice}
        </div>

        <div className={classes.cart__addtocart}>
          {props.filterItem.length} items
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
