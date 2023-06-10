import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ClassProfile from "./ProfileClass";
import React from "react";
import UserContext from "../../utils/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About us</h1>
        <UserContext.Consumer>
          {({ user }) => <h1>{user.name}</h1>}
        </UserContext.Consumer>
        <Profile name={"RAJEEV"} />
        <ClassProfile name={"First"} />
      </div>
    );
  }
}

export default About;
