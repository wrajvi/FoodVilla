import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

export const Title = () => (
  <img
    className="h-28 p-2"
    alt="logo"
    src="https://i.pinimg.com/474x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
  />
);

const Header = () => {
  const [isloggedin, setIsloggedin] = useState(false);
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="header-home">
        <ul className="flex py-2">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2">Contact</li>
          </Link>
          <Link to="/instamart">
            <li className="px-2">Instamart</li>
          </Link>
          <li className="px-2">Cart-{cartItems.length}items</li>
        </ul>
      </div>
      <h1>{isOnline ? "☑️" : "⭕"}</h1>
      <h1 className="p-2 font-bold text-red-400">{user.name}</h1>
      {isloggedin ? (
        <button onClick={() => setIsloggedin(false)}>Logout</button>
      ) : (
        <button
          onClick={() => {
            setIsloggedin(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
