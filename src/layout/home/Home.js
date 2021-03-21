import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Login from "../../components/login/Login";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="home_container">
          <Login />
        </div>
      </div>
    );
  };
}

export default Home;