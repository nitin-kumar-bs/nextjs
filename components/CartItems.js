import React from "react";
import classes from "./CartItems.module.css";
import Image from "next/image";

export default function CartItems(props) {
  const DeleteHandler = () => {
    props.onId(props.uniqueId);
  };
  return (
    <>
      <div className={classes.image__section}>
        {/* <p>{props.uniqueId}</p> */}
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <div>$ {props.price}</div>
        <button onClick={DeleteHandler}>Delete</button>
      </div>
    </>
  );
}
