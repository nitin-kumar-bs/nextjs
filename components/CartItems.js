import React from "react";
import classes from "./CartItems.module.css";
import Image from "next/image";

export default function CartItems(props) {
  return (
    <>
      <div className={classes.image__section}>
        {/* <Image
          src={props.ImageURL}
          alt={props.title}
          width="60"
          height="60"
        ></Image> */}
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <div>$ {props.price}</div>
      </div>
    </>
  );
}
