import { Route, Routes, NavLink } from "react-router-dom";
import './headerTabs.css'
import { useEffect, useState } from "react";
import Recent from "../recents/recent";
import Favourites from "../favourites/favourites";
import HomeTab from "../hometab/homeTab";

const HeaderTabs = () => {
  const [value, onChange] = useState("");
  const [time, onChangeTime] = useState("")
   const date = new Date();

    setInterval(function () {
      today();
    }, 1000);

    setInterval(function () {
        todayTime();
      }, 1000);

    const today = () => {
      onChange(
        `${date.toLocaleString("en-us", {
          weekday: "short",
        })} ${date.getDate()}, ${date.toLocaleString("en-us", {
          month: "short",
        })} ${date.getFullYear()} `
      );
    };

    const todayTime = () => {
        onChangeTime(
          ` ${date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            // second: "numeric",
            hour12: true,
          })}`
        );
      };
      
  return (
    <div>
      <div className="tabLinks">
        <div className="tabsSelect">
          <NavLink to="/" className="linkNames">
            HOME
          </NavLink>
          <NavLink to="/fav" className="linkNames">
            FAVOURITE
          </NavLink>
          <NavLink to="/recent" className="linkNames">
            RECENT SEARCH
          </NavLink>
        </div>
        <div className="date">{value}&nbsp;&nbsp;{time}</div>
      </div>
      <Routes>
        <Route path="/" element={<HomeTab value={value} />} />
        <Route path="/fav" element={<Favourites />} />{" "}
        <Route path="/recent" element={<Recent />} />
      </Routes>
    </div>
    
  );
};

export default HeaderTabs;

