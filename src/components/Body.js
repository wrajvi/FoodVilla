import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("KFC");
  const [allrestaurant, setAllrestaurant] = useState([]);
  const [filteredrestaurant, setFilteredrestaurant] = useState([]);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    getrestaurant();
  }, []);

  async function getrestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.915389606436783&lng=80.94339955598116&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllrestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredrestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🛑Please Check Your Internet Connection</h1>;
  }

  return allrestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          placeholder="Search"
          className="focus:bg-green-100 p-2 m-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-900 text-white rounded-md hover:bg-gray-500"
          onClick={() => {
            const data = filterData(searchText, allrestaurant);
            setFilteredrestaurant(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) => {
            return setUser({
              name: e.target.value,
              email: e.target.value + "@gmail.com",
            });
          }}
        />
      </div>

      <div className="flex flex-wrap">
        {filteredrestaurant.length === 0
          ? setFilteredrestaurant(allrestaurant)
          : filteredrestaurant.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  <RestaurantCard {...restaurant.data} />
                </Link>
              );
            })}
      </div>
    </>
  );
};
export default Body;
