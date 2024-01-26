import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    avgRatingString,
    costForTwo,
    sla,
    cuisines,
  } = props.resData.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>⭐️ {avgRatingString} Rating</h4>
      <p className="cuisines">{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
      <div className="delivery">
        <span>⏳ {sla.slaString}</span>
        <span>{sla.lastMileTravelString}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
