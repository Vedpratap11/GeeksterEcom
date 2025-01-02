import { useEffect, useState } from "react";
import instance from "../axiosConfig";
import Product from "../components/Product.jsx";

function First() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const result = await instance("/api/product");
        console.log(result.data);
        setProducts(result.data);
      } catch (error) {
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading)
    return <div className="font-bold text-2xl text-center min-h-screen">Loading...</div>;

  return (
    <div className="flex flex-wrap py-4 px-12 gap-4 mb-8" >
      {products.map((product) => {
        return products.length > 0 ? (
          <Product key={product.id} product={product} />
        ) : (
          ""
        );
      })}
    </div>
  );
}

export default First;
