import React from "react";
import Image from "next/image";
import bg from "./bg.jpg";
import "../styles/Home.module.css";
function Body() {
  const goToBtn = () => {
    window.scrollTo({ top: 400, left: 400, behavior: "smooth" });
  };
  return (
    <div>
      <div className="relative h-[350px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image
          src={bg}
          layout="fill"
          className="opacity-80"
          objectFit="cover"
        />
        <div className="relative top-[15vh] text-xl font-semibold pl-12">
          About our App
        </div>
        <div className="relative top-[20vh] max-w-[700px]  text-sm md:text-2xl pl-12">
          <span className=" text-bold ">Wildfire Saviour</span>
          <span className="text-semibold ">
            {" "}
            is a one-stop solution for all the firefighters who are able to get
            real time updates on where wild fire had broken in and can act
            accordingly. Lets leverage the use of tech and save lives of many...
          </span>
        </div>
        <div >
          <a
            className="relative top-[55vh] flex justify-center cursor-pointer h-[35px]"
            href="#section2"
          >
            <img
              alt="Arrow Down Icon"
              src="https://www.solodev.com/assets/anchor/arrow-down.png"
              className="hidden xl:block 2xl:block rounded-[50%] hover:bg-black hover:rounded-[50%] hover:h-[37px] transition transform duration-200 ease-in-out"
              onClick={goToBtn}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Body;
