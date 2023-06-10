import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../src/constants";
const useRestaurant = (resID) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resID);
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }

  return restaurant;
};
export default useRestaurant;
