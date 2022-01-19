import React from "react";
import { useRouter } from "next/router";
import CartItem from "../../components/CartItem";

function Cart(props) {
  const router = useRouter();

  //console.log(props.onCart);
  // console.log(router.query.CartId);
  return (
    <>
      <div>
        <CartItem></CartItem>
      </div>
    </>
  );
}

export default Cart;
