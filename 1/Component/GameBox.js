import React, { useEffect, useState } from "react";
import Obstacle from "./Obstacle";
import Bird from "./Bird";
import "./GameBox.css";
function GameBox() {
  const [obstacleLeft, setObstacleleft] = useState(660);
  const [OsHeight, setOsHeight] = useState(100);
  const [birdJump, setbirdJump] = useState(200);
  let GameBoxH = 400;
  let gameWidth = 700;
  let OsGap = 100;
  const customeStyle = {
    width: "700px",
    height: "400px",
    border: " 10px solid black",
    // position: "relative",
    overflow: "hidden",
  };

  //   let OsHeight = Math.floor(Math.random() * (GameBoxH - OsGap));
  //   let OsHeight = 100;
  let bottomOsHeight = GameBoxH - OsGap - OsHeight;

  useEffect(() => {
    let timeid;
    if (obstacleLeft >= -40) {
      timeid = setInterval(() => {
        setObstacleleft((prev) => prev - 5);
      }, 24);
    } else {
      setObstacleleft(gameWidth - 40);
      setOsHeight(Math.floor(Math.random() * (GameBoxH - OsGap)));
    }
    return () => {
      clearInterval(timeid);
    };
  }, [obstacleLeft]);

  useEffect(() => {
    let timeid;
    if (birdJump < GameBoxH - 20) {
      timeid = setInterval(() => {
        setbirdJump((prev) => prev + 3);
      }, 24);
    }
    return () => {
      clearInterval(timeid);
    };
  }, [birdJump]);

  const handleClick = () => {
    let newPostion = birdJump - 100;
    if (newPostion <= 0) {
      setbirdJump(0);
    } else {
      setbirdJump((prev) => prev - 100);
    }
  };

  return (
    <div>
      <div className="game_Box" style={customeStyle} onClick={handleClick}>
        <Obstacle top={0} height={OsHeight} LEFT={obstacleLeft} />
        <Obstacle
          top={GameBoxH - (OsHeight + bottomOsHeight)}
          height={bottomOsHeight}
          LEFT={obstacleLeft}
        />
        <Bird top={birdJump} />
      </div>
    </div>
  );
}

export default GameBox;
