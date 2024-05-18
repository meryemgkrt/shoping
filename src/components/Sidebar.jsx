import {useContext} from "react";
import { SidebarContext } from "../context/SidebarContext";
import CartItem from "./CartItem";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";

import { FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { isSidebarOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  /* console.log(useContext(CartContext)); */

  return (
    <div
      className={`${
        isSidebarOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">

      <div className="uppercase text-sm font-semibold">Shopping Bag ({itemAmount})</div>
        <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center ">
          <IoArrowForwardCircleOutline  className="text-2xl cursor-pointer hover:scale-110 hover:text-green-500" />
        </div>
      </div>
      <div className="flex flex-col  gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden">
        {cart.map((item)=>{
          return <CartItem  item={item} key={item.id}/>
        })}
      </div>
      <div className="flex  flex-col gap-y-3  py-4 mt-4 px-4 rounded">
        <div className="flex items-center justify-between">
          <div className="uppercase font-semibold">
            <span>Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div onClick={clearCart} className="cursor-pointer py-4 bg-red-500 items-center text-white w-12 h-12 flex justify-center">
            <FiTrash2/>
          </div>
        </div>
        <Link to={"/"} className="bg-gray-200 p-4 rounded-md flex justify-center items-center w-full  font-medium">View Cart</Link>
        <Link to={""} className="bg-black text-white rounded-md p-4 flex justify-center items-center w-full  font-medium">Checkout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
