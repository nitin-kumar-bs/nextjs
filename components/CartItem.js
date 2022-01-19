import React from "react";
import classes from "./CartItem.module.css";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import { useDispatch } from "react-redux";

function CartItem() {
  const cartItems = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const onDelHandler = (id) => {
    dispatch({ type: "DEL__ITEM", id: id });
  };

  const clearAllHandler = () => {
    dispatch({ type: "CLEAR__ITEM" });
  };

  //console.log(cartItems[0].id);
  return (
    <div className={classes["cartItem--Container"]}>
      <div className={classes.cart__header}>
        <h2>
          {cartItems.length > 0
            ? cartItems.length + " Cart added"
            : "Cart Empty"}{" "}
        </h2>
        {cartItems.length > 0 ? (
          <button onClick={clearAllHandler}>clear ALL</button>
        ) : (
          ""
        )}
      </div>
      <div>
        {cartItems.map((item) => {
          return (
            <CartItems
              key={item.id}
              title={item.title}
              desc={item.description}
              imgURL={item.imageUrl}
              price={item.price}
              uniqueId={item.id}
              onId={onDelHandler}
            ></CartItems>
          );
        })}
      </div>
    </div>
  );
}

export default CartItem;
