import mainLogo from 'images/logo_casa_w2.png';
import { useLocation, useNavigate } from 'react-router';
import { useEffect, useState } from "react";
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from "lib/firebase";

export default function Header() {
    const [pageState, setPageState] = useState("Sign in");
    const location =  useLocation();
    const navigate = useNavigate();
    function pathMatchRoute(route) {
        if(route === location.pathname) {
          
            return true;
        }
    }
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setPageState("Profile");
        } else {
          setPageState("Sign in");
        }
      });
    }, [auth]);
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto ">
        <div>
          <img
            src={mainLogo}
            alt="logo"
            className="h-24 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
