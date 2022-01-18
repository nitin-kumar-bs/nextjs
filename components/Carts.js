import React, { useEffect, useState, useReducer } from "react";
import classes from "./Carts.module.css";
import CartListing from "./CartListing";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import Loader from "./Loader";

const Carts = (props) => {
  const cartReducer = (state, action) => {
    if (action.type == "ADD__ITEM") {
      //   console.log(state.items);
      return { ...state, items: [...state.items, action.item] };
      //  const UpdatedArray = state.items.push(action.item);

      // return UpdatedArray;
    }
    return { items: [] };
  };

  const [cartItems, setCartItems] = useReducer(cartReducer, { items: [] });

  const onAddHandler = (item) => {
    setCartItems({ type: "ADD__ITEM", item: item });
  };

  // console.log(cartItems);

  const [searchData, setsearchData] = useState("");
  // const [loader, setLoader] = useState(false);
  // dispatchLoader({ type: "SET__LOADER" });
  // setLoader(true);

  const getInputValue = (InputValue) => {
    setsearchData(InputValue);
  };

  const FilterData = props.listData.filter((data) => {
    return data.title.toLowerCase().includes(searchData);
  });

  const totalPrice = FilterData.map((price) => {
    return price.price;
  });
  const AddPrice = totalPrice.reduce((total, num) => {
    return total + num;
  }, 0);

  return (
    <div className={classes.cart__wrapper}>
      <CartHeader
        cartItems={cartItems}
        SetSearchProduct={getInputValue}
      ></CartHeader>
      <div className={classes.cart__list}>
        <>
          {FilterData.map((list) => {
            return (
              <CartListing
                onAdd={onAddHandler}
                key={list.id}
                title={list.title}
                desc={list.description}
                imgURL={list.imageUrl}
                price={list.price}
                items={list}
              ></CartListing>
            );
          })}
        </>
      </div>
      <CartFooter addPrice={AddPrice} filterItem={FilterData}></CartFooter>
    </div>
  );
};

export default Carts;
