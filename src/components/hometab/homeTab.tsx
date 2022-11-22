import React, { useState } from 'react'
import './homeTab.css'
import Switch from "react-switch";

const HomeTab = (props:any) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="weatherContainer">
      <div className="homeTabContainer">
        <div className="dateMobile">{props.value}</div>
        <div className="locationName">
          Udupi,&nbsp;
          Karnataka
        </div>
        <div className="addFav">
            <div className="favImg">
              <img
                src={require("../../assests/icon_favourite.png")}
                alt="img"
                className="heartImg"
              />
            </div>
            <div className="favText">Add to favourite</div>
          </div>
        </div>
                <div className="weatherDisplay">
          <div className="weatherImg">
            <img
              src={require("../../assests/icon_mostly_sunny.png")}
              alt=""
              className="sunnyImg"
            />
          </div>
          <div className="weatherDegree">
            <div>80</div>
            <div className="switchTempature">
              <Switch
                borderRadius={4}
                onChange={handleChange}
                checked={checked}
                className="react-switch"
                offColor="transparent"
                onColor="transparent"
                uncheckedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      color: "red",
                    }}
                  >
                    {"\u00B0"}C
                  </div>
                }
                uncheckedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      paddingRight: 2,
                      color: "white",
                      zIndex: "2",
                    }}
                  >
                    {"\u00B0"}F
                  </div>
                }
                checkedIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      fontSize: 18,
                      paddingRight: 2,
                      color: "white",
                    }}
                  >
                    {"\u00B0"}C
                  </div>
                }
                checkedHandleIcon={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      color: "red",
                      fontSize: 18,
                    }}
                  >
                    {"\u00B0"}F
                  </div>
                }
              />
              </div>
              

          </div>
          <div className="weatherDetail">
            Mostly Sunny
          </div>
    </div>
    </div>
  )
}

export default HomeTab