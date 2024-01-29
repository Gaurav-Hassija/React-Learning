import React from "react";
import { CDN_URL } from "../utils/constants";

function MenuItem(props) {
  const { name, description, imageId, defaultPrice, price } =
    props.data.card.info;
  return (
    <div className="menu-item-container">
      <div className="menu-item">
        <div className="item-detail">
          <p className="item-name">{name}</p>
          <span className="price"> ₹ {defaultPrice / 100 || price / 100}</span>
          <br></br>
          <br></br>
          <span className="description">{description}</span>
        </div>
        <div className="item-image">
          <img alt="food-image" src={CDN_URL + imageId}></img>
        </div>
      </div>
      <div className="menu-item-sep"></div>
    </div>
  );
}

export default MenuItem;
