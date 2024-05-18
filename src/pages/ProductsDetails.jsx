import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

const ProductDetails = () => {
  const { id } = useParams();

  const { products } = useContext(ProductContext);
  const {  addToCart } = useContext(CartContext);
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });
  console.log(product);

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, image, description } = product;
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex justify-center ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img src={image} alt={title} className="w-96 h-96 lg:max-w-sm" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-semibold mb-4">{title}</h1>
            <p className="text-lg mb-4">{description}</p>
            <p className="text-2xl font-semibold mb-4">${price}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary text-white px-4 py-2 rounded-md"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
