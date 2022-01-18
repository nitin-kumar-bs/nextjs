import React, { Fragment } from "react";
import Image from "next/image";
import classes from "./CartHeader.module.css";
import ShoppingCart from "../img/shopping-cart.png";
import SearchCart from "../img/search.png";
import CartItems from "./CartItems";

const CartHeader = (props) => {
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
            <button type="text">
              <Image
                src={ShoppingCart}
                alt="shopping_cart"
                width="30"
                height="30"
              />
              <span className="count">{props.cartItems.items.length}</span>
            </button>
            <ul
              className={props.cartItems.items.length > 0 ? "" : classes.none}
            >
              <li>
                <div className={classes.dropDownsection}>
                  {props.cartItems.items.map((item) => {
                    return props.cartItems.items.length > 0 ? (
                      <CartItems
                        key={item.id}
                        title={item.title}
                        desc={item.description}
                        imgURL={item.imageUrl}
                        price={item.price}
                      ></CartItems>
                    ) : (
                      ""
                    );
                  })}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CartHeader;
