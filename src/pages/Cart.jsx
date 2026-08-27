import React from "react";
import { useCart } from "../context/CartContext";
import ProductCounter from "../components/UI/ProductCounter";
import EmptyCart from "../components/UI/EmptyCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from "react-router";

const Cart = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeProductFromCart,
    totalPrice,
  } = useCart();
  
  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="max-w-6xl mx-auto px-5 py-10">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-5">
              {cart.map((item) => {

                return (
                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row gap-5 bg-white shadow-md rounded-xl p-5">
                    {/* Image */}

                    <div className="w-full md:w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Details */}

                    <div className="flex-1">
                      <p className="text-sm uppercase text-gray-500">
                        {item.category.name}
                      </p>

                      <h2 className="text-xl font-bold mt-1">{item.title}</h2>

                      <div className="mt-3">
                        <span className="text-indigo-600 font-bold text-lg">
                          ${item.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-5">
                        <ProductCounter
                          increaseQuantity={() => increaseQuantity(item.id)}
                          decreaseQuantity={() => decreaseQuantity(item.id)}
                          quantity={item.quantity}
                        />

                        <button
                          onClick={() => removeProductFromCart(item.id)}
                          className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium">
                          <RiDeleteBin6Line size={20} />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Item Total */}

                    <div className="font-bold text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary */}

            <div
              className=" bg-gray-100 rounded-xl p-6 h-fit lg:sticky lg:top-24">
              <h2 className="text-2xl font-bold mb-5">Order Summary</h2>
              <div className="flex justify-between mb-3">
                <span>Total Items</span>
                <span className="font-bold">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </div>

              <div className="flex justify-between text-lg mb-2.5">
                <span>Total Price</span>

                <span className="font-bold text-indigo-600">
                  ${totalPrice}
                </span>
              </div>

              <NavLink to="/checkout"
              cart={cart} 
               totalPrice={totalPrice}
              className="w-full bg-indigo-600 text-white py-1.5 px-3 rounded-lg hover:bg-indigo-500 transition">
                Checkout
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
