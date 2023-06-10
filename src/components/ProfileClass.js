import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "DUMMY NAME",
        login: "DUMMY",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(" https://api.github.com/users/wrajvi");
    const json = await data.json();
    this.setState({
      userinfo: json,
    });
  }

  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return (
      <>
        <h1>{this.state.userinfo.name}</h1>
        <h3>{this.state.userinfo.login}</h3>
        <img
          className="rounded-3xl shadow-sm"
          alt="img"
          src={this.state.userinfo.avatar_url}
        />
        <h1>Class Profile</h1>
        <h2>Again IN Class</h2>
      </>
    );
  }
}

export default Profile;
