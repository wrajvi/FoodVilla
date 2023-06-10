import { useContext } from "react";
import UserContext from "../../utils/UserContext";
const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="h-16 mt-4 bg-pink-100 shadow-lg">
      <h1 className="text-center">
        This Site is Developed by {user.name} ❤️ {user.email}
      </h1>
    </div>
  );
};
export default Footer;
