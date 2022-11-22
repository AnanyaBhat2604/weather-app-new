import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="headerContainer">
      <div className="webHeader">
        <div className="logo">
          <img src={require("../../assests/logo_web.png")} alt="" />
        </div>
        <div className="searchFiled">
          <form className="formcontainer">
            <div className="inputField">
              <input
                type="text"
                className="search"
                name="search"
                placeholder="Search city"
              />
            </div>
            <div className="searchIcn">
              <img
                src={require("../../assests/icon_search_white.png")}
                alt=""
                className="searchIcn"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="mobileHeader">
        <div className="mobileLeft">
          <div className="burgerMenu">
            <img
              src={require("../../assests/icon_menu_white.png")}
              alt=""
              className="burger"
               onClick={() => {
              setNav(true);
            }}
            />
          </div>
          <div className="mobileLogo">
            <img
              src={require("../../assests/logo.png")}
              alt=""
              className="mobLogo"
            />
          </div>
        </div>
        <div className="mobileRight">
          <img src={require("../../assests/icon_search_white.png")} alt="" />
        </div>
      </div>
      {nav && (
        <div className="linkList">
          {" "}
          <NavLink
            to="/"
            onClick={() => {
              setNav(false);
            }}
            className="linkMobile"
          >
            Home
          </NavLink>
          <NavLink
            to="/fav"
            onClick={() => {
              setNav(false);
            }}
            className="linkMobile"
          >
            Favourite
          </NavLink>
          <NavLink
            to="/recent"
            onClick={() => {
              setNav(false);
            }}
            className="linkMobile"
          >
            Recent Search
          </NavLink>
          <div
            className="close"
            onClick={() => {
              setNav(false);
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Header;
