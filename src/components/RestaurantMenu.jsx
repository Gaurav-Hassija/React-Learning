import React from "react";
import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Menu from "./Menu";
const RestaurantMenu = () => {
  const [menuDetails, setMenuDetails] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();

  const fetchMenu = async () => {
    const response = await fetch(MENU_API + resId);
    const jsonData = await response.json();
    setMenuDetails(jsonData?.data?.cards);
  };

  if (menuDetails.length === 0) return <Shimmer />;

  const { name, areaName, avgRatingString, cuisines, totalRatingsString, sla } =
    menuDetails[0].card.card.info;

  const cards = menuDetails[2].groupedCard.cardGroupMap.REGULAR.cards;

  return (
    <div className="menu-container">
      <div className="res">
        <div className="res-detail">
          <h2>{name}</h2>
          <p className="cuisines-text">{cuisines.join(", ")}</p>
          <p className="location-distance">
            {areaName}, {sla.lastMileTravelString}
          </p>
        </div>
        <div className="res-rating">
          <button className="res-rating-btn">
            <span>⭐️ </span>
            <span> {avgRatingString}</span>
            <hr></hr>
            <span className="total-ratings">{totalRatingsString}</span>
          </button>
        </div>
      </div>
      <hr className="dotted"></hr>
      {cards.map((card, index) => {
        if (index !== 0 && card.card.card.title && card.card.card.itemCards) {
          return <Menu key={index} data={card} />;
        }
      })}
    </div>
  );
};

export default RestaurantMenu;
