/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function trimContent(input, limit) {
  return input.length > limit ? input.slice(0, limit + 1) + "..." : input;
}

function Product({ product }) {
  return (
    <div className="w-[22%] my-8 h-80">
      <div className="content w-full text-center">
        <Link to={`/product/${product._id}`}>
          <img
            src={product.url}
            alt=""
            className="w-64 h-40 object-contain mb-3"
          />
        </Link>
        <h3 className="text-lg">
          <Link to={`/product/${product._id}`}>
            {trimContent(product.name, 25)}
          </Link>
        </h3>
        <p className="my-2">$ {product.price}</p>
        <Link className="px-6 py-2 my-4 bg-red-300 rounded-lg inline-block hover:bg-red-600 hover:text-white">
          Add To Wishlist
        </Link>
      </div>
    </div>
  );
}

export default Product;
