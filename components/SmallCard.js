import React, { useState } from "react";
import Image from "next/image";
var x = 0;
function SmallCard({ id, title, location1, location2, data1, data2 }) {
  const [loc, setLoc] = useState(false);
  function setdist() {
    if (Math.abs(location1 - data1) < 2) {
      if (Math.abs(location2 - data2) < 2) {
        x = x + 1;
        console.log(x);
        setLoc(true);
      }
    }
  }
  return (
    <div>
      
      {loc ? null : setdist()}
      {loc ? (
        <div className="m-2 mb-5 p-4 mt-5 rounded-xl cursor-pointer bg-gray-100 hover:bg-gray-200 hover:scale-105 transition transform duration-200 ease-out w-60">
          <h2>{id}</h2>
          <h3 className="text-gray-500">{title}</h3>
        </div>
      ) : null}
      {id === "hey" ? (
        x > 0 ? null : (
          <>
            <h1 className="text-2xl m-5 items-center flex flex-col justify-center font-semibold">
              <p>There is no wildfire around you</p>
              <p>You are completely safe!!</p>
            </h1>
          </>
        )
      ) : null}
      <div></div>
    </div>
  );
}
export default SmallCard;
