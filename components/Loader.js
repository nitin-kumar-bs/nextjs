import React from "react";
import Image from "next/image";
import classes from "./Loader.module.css";
import LoaderIMG from "../img/loader.gif";

const Loader = () => {
  return (
    <div className={classes.Cart__overlay}>
      <span>
        <Image src={LoaderIMG} alt="loader"></Image>
      </span>
    </div>
  );
};

export default Loader;
