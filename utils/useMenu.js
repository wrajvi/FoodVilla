import { useState, useEffect } from "react";
import { FETCH_MENU_URL, MENU_ITEM_TYPE_KEY } from "../src/constants";

const useMenu = (resID) => {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    getmenu();
  }, []);

  async function getmenu() {
    try {
      const response = await fetch(FETCH_MENU_URL + resID);
      const json = await response.json();
      const menuItemsData =
        json?.data?.cards
          .find((x) => x.groupedCard)
          ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
          ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
          ?.map((x) => x.itemCards)
          .flat()
          .map((x) => x.card?.info) || [];

      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find((x) => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      });
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
    }
  }
  return menuItems;
};
export default useMenu;
