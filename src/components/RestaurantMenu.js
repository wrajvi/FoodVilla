import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../../utils/useRestaurant";
import useMenu from "../../utils/useMenu";
import { useDispatch } from "react-redux";
import { addItems } from "../../utils/cartSlice";

const RestaurantMenu = () => {
  const params = useParams();
  const { resID } = params;

  const restaurant = useRestaurant(resID);
  const restaurantmenu = useMenu(resID);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return !restaurant || !restaurantmenu ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <h1>Restaurant ID {restaurant.id}</h1>
        <h1>{restaurant.name}</h1>
        <img alt="img" src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
      </div>
      <div>
        <ul>
          {Object.values(restaurantmenu).map((item) => {
            return (
              <li key={item.id}>
                {item.name} -
                <button
                  className="p-2 m-2 bg-green-200 rounded-md"
                  onClick={() => handleAddItem(item.name)}
                >
                  Add
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
export default RestaurantMenu;
