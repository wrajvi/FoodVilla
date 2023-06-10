import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../../utils/UserContext";
const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  const { user } = useContext(UserContext);

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-100">
      <img alt="img" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
      <h4>{user.name}</h4>
      <h5>{user.email}</h5>
    </div>
  );
};
export default RestaurantCard;
