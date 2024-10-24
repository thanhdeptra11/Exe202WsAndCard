import React from "react";
import clutteryGif from "../assets/foodwaiting.png";
import "../App.css";
function DrinkMenu() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <div className="text-center">
        <div className="flex items-center justify-center">
          <img src={clutteryGif} className="w-20" />
        </div>
        <div className="flex gap-2 items-end mt-3">
          <p className="text-5xl text-red-400 font-bold">COMING SOON</p>
          <div id="wave">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrinkMenu;
