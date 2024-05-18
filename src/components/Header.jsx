import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiHanger } from "react-icons/gi";
import Logo from "../assets/img/logo.png";
import logos from "../assets/img/logo.svg";
const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActived, setIsActived] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActived(true) : setIsActived(false);
    });
  });
  return (
    <header className={`${isActived ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-10 transition-all`}>
      <div className="container flex items-center justify-between mx-2 ">
        <Link to={"/"} className="">
          <div>
            <img
              src={logos}
              className="text-[60px] w-[70px] h-[70px] text-black"
            />
          </div>
        </Link>

        <div
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="cursor-pointer flex relative "
        >
          <img src={Logo} alt="logo" className="w-[40px] h-[40px]" />

          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center text-white">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;