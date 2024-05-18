import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);
  const { id, amount, image, price, title } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4 border-b border-gray-300">
        <Link to={`/product/${id}`}>
          <img src={image} alt={title} className="max-w-[80px] object-cover" />
        </Link>
        <div className="w-full flex-flex-col">
          <div className="flex justify-between mb-2">
            <Link
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
              to={`/product/${id}`}
            >
           
           
              {title}
            </Link>
            <div onClick={()=>removeFromCart(id)} className="text-xl ">
              <IoMdClose className="text-gray-500 hover:text-red-500 shodow-red-200 text-xl cursor-pointer" />
            </div>
          </div>

          <div className=" flex gap-x-2 h-[36px]">
            <div className="flex flex-1 items-center max-w-[100px] font-medium h-full border text-primary">
            <div onClick={()=>decreaseAmount(id)}  className="flex-1 h-full flex items-center justify-center cursor-pointer">
            <IoMdRemove/>
            </div>
            <div  className="h-full flex justify-center items-center px-2">
              {amount}
            </div>
            <div onClick={()=>increaseAmount(id)} className="flex-1 h-full flex items-center justify-center cursor-pointer">
              <IoMdAdd/>
            </div>
            </div>
            <div className="flex flex-1 items-center justify-around">$ {price}</div>
            <div className="flex flex-1 justify-end items-center text-primary font-medium ">{`$ ${parseFloat(price * amount).toFixed(1)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
