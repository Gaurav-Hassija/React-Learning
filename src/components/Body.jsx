import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RES_LIST_API } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [resList, setResList] = useState([]);
  let [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RES_LIST_API);

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
          <Link
            style={{ textDecoration: "none" }}
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
