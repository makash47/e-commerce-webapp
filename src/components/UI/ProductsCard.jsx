import React from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router";
import { useCart } from "../../context/CartContext";
import { useFav } from "../../context/FavContext";
import { FaHeart } from "react-icons/fa";

const ProductsCard = ({ productData }) => {
  const { addToCart, isInCart } = useCart();
  const { addToFav, isInFav } = useFav();
  const { id, images, category, title, price, slug } = productData;

  const productAdded = isInCart(id);
  const addedTofav = isInFav(id);

  return (
    <li className="relative shadow-lg shadow-amber-200 p-3.5 rounded-lg transition-all duration-300 hover:-translate-y-2">
      <NavLink to={`/products/${slug}`}>
        <figure className="w-full bg-indigo-100 mb-1.5">
          <img
            className="w-full rounded-lg object-cover h-64"
            src={
              images.length > 0 ? images[0] : "https://via.placeholder.com/400"
            }
            alt=""
          />
        </figure>
      </NavLink>

      <div className="flex items-center justify-between">
        <h2 className="uppercase font-medium text-gray-700">{category.name}</h2>
      </div>

      <div>
        <h1 className="font-bold py-2 text-lg">
          {title.length > 25 ? title.slice(0, 24) + "..." : title}
        </h1>
      </div>

      <div className="flex items-center justify-between">
        <div className="price">
          <h1 className="font-bold text-gray-900">${price}</h1>
        </div>

        <button
          disabled={productAdded}
          onClick={() => addToCart(productData)}
          className={`flex gap-0.5 text-gray-100 p-2 rounded-full font-bold
      ${
        productAdded
          ? "bg-green-500 cursor-not-allowed"
          : "bg-indigo-600 hover:bg-indigo-500"
      }`}
        >
          <CiShoppingCart size={24} />
          <span>{productAdded ? "Added" : "Add"}</span>
        </button>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={() => addToFav(productData)}
          className="absolute top-9 right-7"
        >
          {addedTofav ? (
            <FaHeart 
              size={24}/>
          ) : (
            <CiHeart
              size={30}
              className="rounded-full bg-white p-2 hover:scale-110 transition-all duration-300 hover:text-indigo-500"
            />
          )}
        </button>
      </div>
    </li>
  );
};

export default ProductsCard;
