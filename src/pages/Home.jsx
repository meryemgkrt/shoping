import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "./Product";
import Hero from "./Hero";

const Home = () => {
  const { products } = useContext(ProductContext);
  
  // Ürünleri kategoriye göre filtrele
  const productFilter = products.filter((item) =>
    item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <div className="flex flex-col">
    <Hero/>
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {productFilter.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
