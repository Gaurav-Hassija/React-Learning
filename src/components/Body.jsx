import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  let [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2011503&lng=73.1676686&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await response.json();
    setResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return filteredResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div className="search-bar">
          <input
            type="text"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            type="button"
            onClick={() => {
              filteredResList = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredResList);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="rating-btn"
            type="button"
            onClick={() => {
              filteredResList = resList.filter(
                (res) => res.info.avgRating >= 4.1
              );
              setFilteredResList(filteredResList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="distance-btn"
            type="button"
            onClick={() => {
              filteredResList = resList.filter(
                (res) => res.info.sla.lastMileTravel <= 8
              );
              setFilteredResList(filteredResList);
            }}
          >
            Nearby Me
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredResList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
