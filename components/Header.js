import React from "react";
import Image from "next/image";
import { GlobeAltIcon, SearchIcon } from "@heroicons/react/solid";
import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
// import { useEffect } from "react";
function Header({propState}) {
  const [propState1, setPropState1] = useState(propState)

  let router = useRouter();

  const logout = () => {
    sessionStorage.removeItem("Token");
    setPropState1(false)
    router.push("/loggedIn");
  };

  useEffect(() => {
    let token = sessionStorage.getItem('Token')
    if(!token){
      setPropState1(false)
    }

    if(token){
        setPropState1(true)
        router.push('/')
    }
}, [])

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 md:px-7">
      {/* {left} */}
      <div className="relative flex items-center h-16 cursor-pointer my-auto">
        <Image
          src="https://1000logos.net/wp-content/uploads/2017/07/Fire-Department-Logo.png"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* {middle} */}
      <div>
        <a><h1 className=" border-2 w-[100%] py-2 rounded-3xl p-0 cursor-pointer align-center flex justify-center text-2xl mt-2 hover:bg-red-400 hover:text-white transition transform duration-200 ease-out" onClick={()=>Router
        .push('/')}>WILDFIRE SAVIOUR</h1></a>
      </div>

      {/* {right} */}
      <div className="flex space-x-4 items-center justify-end text-gray-500">
        {
          propState1 ? <button onClick={logout} className="border-2 p-2 rounded-full">LogOut</button>
          :<button onClick={()=>router.push('/loggedIn')} className="hover:bg-gray-200 hover:scale-105 border-2 p-2 rounded-full transition transform duration-200 ease-out">Sign up/Sign in</button>
        }
      </div>
    </header>
  );
}

export default Header;