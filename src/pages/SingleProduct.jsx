import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import instance from "../axiosConfig";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // const navigate = useNavigate()

  useEffect(() => {
    if (id) fetchData(id);
  }, [id]);

  async function fetchData(id) {
    try {
      const response = await instance.get("/api/product/" + id);
      setProduct(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {product && (
        <div className="flex gap-12 px-12 py-4 min-h-screen">
          <div className="w-1/5">
            <img src={product.url} alt="Product Image" />
          </div>
          <div className="w-4/5">
            <h2 className="text-2xl font-semibold">{product.name}</h2>

            <div id="rating">
              {/* Get stars here */}
              Rating: {product.totalRating}
            </div>

            <div className="flex gap-6">
              <p>
                <span className="font-semibold">Brand</span>:{" "}
                <em className="text-blue-500 underline cursor-pointer">
                  <Link to={`/product/brand/${product.brand}`}>{product.brand}</Link>
                </em>
              </p>
              <p>
                <span className="font-semibold">Category</span>:{" "}
                <em className="text-blue-500 underline cursor-pointer">
                  {product.category}
                </em>
              </p>
            </div>
            <p className="font-bold text-xl my-4">${product.price}</p>

            <div className="flex gap-4 mb-2">
              <Link className="px-6 py-2 my-4 bg-red-300 rounded-lg inline-block hover:bg-red-600 hover:text-white">
                Add To Wishlist
              </Link>
              <Link className="px-6 py-2 my-4 bg-red-300 rounded-lg inline-block hover:bg-red-600 hover:text-white">
                Add To Cart
              </Link>
            </div>

            <p>{product.description}</p>

            {product.ratings && (
              <div className="my-6">
                <h3 className="font-bold text-xl mb-2">Reviews</h3>
                {product.ratings.map((rating) => {
                  return (
                    <div className="rating mb-2" key={rating._id}>
                      <p>{rating.comment}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProduct;
