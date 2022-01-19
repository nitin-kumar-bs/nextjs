import React, { Fragment } from "react";
import Image from "next/image";
import classes from "./CartHeader.module.css";
import ShoppingCart from "../img/shopping-cart.png";
import SearchCart from "../img/search.png";
import Link from "next/link";

const CartHeader = (props) => {
  console.log(props.cartItems);
  const inputHandler = (event) => {
    props.SetSearchProduct(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.cart__header}>
        <div className={classes.header__section}>
          <div className={classes.cart__input}>
            <input type="text" onChange={inputHandler}></input>
            <Image src={SearchCart} alt="search" width="25" height="25"></Image>
          </div>
          <div className={classes.cart__button}>
            <Link href={"/Cart/CardId"} passHref>
              <button type="text">
                <Image
                  src={ShoppingCart}
                  alt="shopping_cart"
                  width="30"
                  height="30"
                />
                <span className="count">{props.cartItems.length}</span>
              </button>
            </Link>
            {/* <Cart onCart="aa"></Cart> */}
            {/* <ul
              className={props.cartItems.items.length > 0 ? "" : classes.none}
            >
              <li>
                <div className={classes.dropDownsection}>
                  <CartItem onCart={props.cartItems.items}></CartItem>
                </div>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartHeader;
