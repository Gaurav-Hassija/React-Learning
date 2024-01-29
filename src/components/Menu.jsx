import React from "react";
import MenuItem from "./MenuItem";

const Menu = (props) => {
  const title = props.data.card.card.title;
  const itemCards = props.data.card.card.itemCards;
  return (
    <div className="menu-title">
      <h2> {title}</h2>
      {itemCards.map((item) => (
        <MenuItem key={item.card.info.id} data={item} />
      ))}
      <div className="border-seprator"></div>
    </div>
  );
};

export default Menu;
