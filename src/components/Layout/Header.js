import React from "react";
import classes from "./Header.module.css";
import food from "../Images/khana.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>The Kings Resturant</h1>
        <HeaderCartButton onClickCart={props.onClickCart}>Your Plate</HeaderCartButton>
      </header>
      <div className={classes[`main-image`]}>
        <img src={food} alt="fooditemdesc"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
