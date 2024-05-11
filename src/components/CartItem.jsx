import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount } = useContext(CartContext);
  const { id, title, price, amount, image } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full min-h-[150px] font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`} className=" ">
          <img src={image} alt={title} className="max-w-[80px] p-1" />
        </Link>
        <div className="w-full flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-400 hover:text-red-500 transition" />
            </div>
          </div>

          <div className=" flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="flex h-full justify-center items-center px-2">
                {amount}
              </div>
              <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className="flex-1 flex items-center justify-around">$ {price}</div>
            <div className="flex-1 flex justify-end items-center text-primary font-medium">
           {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;