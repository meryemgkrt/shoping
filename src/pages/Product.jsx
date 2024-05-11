import { useContext } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
 /*  console.log(product); */
 const { addToCart } = useContext(CartContext);

  const { id, title, price, category, description, image } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              src={image}
              alt={title}
              className="max-h-[160px] group-hover:scale-125 transition duration-300 "
            />
          </div>
       
          {/* button */}
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2  text-white text-xl
          flex justify-center items-center flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button onClick={()=>addToCart(product,id)} className="">
              <div className="flex justify-center items-center w-12 h-12 bg-red-500 shadow-md">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 bg-white flex justify-center items-center text-primary shadow-lg "
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
   {/* product titile price */}
   <div>
    <div className="text-sm capitalize text-gray-500">{category}</div>
    <Link to={`/product/${id}`}><h2 className="font-semibold mb-1">{title}</h2></Link>
    <div className="font-semibold">${price}</div>
   </div>
    </div>
  );
};

export default Product;