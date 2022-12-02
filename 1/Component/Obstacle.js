import React from "react";

function Obstacle(props) {
  const customeStye = {
    // top:`${props.top}px`,
    // height: "150px",
    // width: "50px",
    // backgroundColor : "brown"
    width: "50px",
    position: "relative",
    height: `${props.height}px`,
    backgroundColor: "brown",
    top: `${props.top}px`,
    left: `${props.LEFT}px`,
  };
  return <div className="Obstacle" style={customeStye}></div>;
}

export default Obstacle;
