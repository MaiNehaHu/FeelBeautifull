import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = ({}) => {
  const cart = useSelector((state) => {
    return state.CartList;
  });

  const userName = useSelector((state) => {
    return state.LoggedUserDetails;
  }).userName;

  const SignInStyling = userName
    ? {
        display: "none",
      }
    : {
        "@media (maxWidth: 600px)": {
          display: "none",
        },
      };

  const userDashBoardStyling = !userName
    ? {
        display: "none",
      }
    : {
        "@media (maxWidth: 600px)": {
          display: "none",
        },
      };

  return (
    <React.Fragment>
      <header id="nav">
        <section id="logo">
          <Link to="/">Feel Beautiful❤️</Link>
        </section>

        <section id="navs">
          <Link to="/">Home🏡</Link>

          <Link to="/Cart">
            Cart🛒<sup id="cartCount">{cart.length}</sup>
          </Link>

          <Link style={SignInStyling} to="/SignIn" id="logIn">
            Get in🔏
          </Link>

          <Link
            style={userDashBoardStyling}
            to={`/UserDashBoard/:${userName}`}
            id="logIn"
          >
            Dashboard <i className="fa fa-user" aria-hidden="true"></i>
          </Link>
        </section>
      </header>
    </React.Fragment>
  );
};

export default NavBar;