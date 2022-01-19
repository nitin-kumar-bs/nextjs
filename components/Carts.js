import React, { useState } from "react";
import classes from "./Carts.module.css";
import CartListing from "./CartListing";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Carts = (props) => {
  const cartItems = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const onAddHandler = (item) => {
    dispatch({ type: "ADD__ITEM", item: item });
  };

  const [searchData, setsearchData] = useState("");

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
