import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";

const Checkout = () => {
  const { cart, totalPrice } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
  });

  console.log("tender");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleOrderPlace = () => {
    toast.success(`Order Place Succesfylly.`);
  };
  return (
    <>
      <div className="max-w-7xl mx-auto px-8 my-10">
        <h1 className="font-bold text-3xl text-gray-900">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl max-w-6xl mx-auto px-8">
            <h1 className="text-2xl my-2.5 font-bold">Shipping Form</h1>
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col gap-2 shadow-2xl p-3.5"
            >
              <div className="flex flex-col gap-2">
                <label className="font-bold text-gray-600" htmlFor="name">
                  Full Name:
                </label>
                <input
                  className="shadow-lg py-2 px-1"
                  type="text"
                  placeholder="Enter your Full name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <label className="font-bold text-gray-600" htmlFor="email">
                  Email:
                </label>
                <input
                  className="shadow-lg py-2 px-1"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label className="font-bold text-gray-600" htmlFor="address">
                  Street Address:
                </label>
                <input
                  className="shadow-lg py-2 px-1"
                  type="text"
                  placeholder="Enter your Street Address"
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="font-bold text-gray-600" htmlFor="city">
                  City:
                </label>
                <input
                  className="shadow-lg py-2 px-1"
                  type="text"
                  placeholder="Enter Your city"
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                <label className="font-bold text-gray-600" htmlFor="city">
                  Country:
                </label>
                <input
                  className="shadow-lg py-2 px-1"
                  type="text"
                  placeholder="Enter Your Country"
                  required
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500"
              >
                Continue to Payment
              </button>
            </form>
          </div>
          <div className="lg:col-span-1 shadow-2xl">
            <h1 className="text-2xl my-2.5 font-bold">Order Summary</h1>
            <div>
              <div>
                {cart.map((item) => (
                  <div key={item.id} className="border-b border-gray-500">
                    <div className="flex items-center justify-between p-2">
                      <div>
                        <h1 className="font-bold">{item.title}</h1>
                        <span className="text-sm">Qty:{item.quantity}</span>
                      </div>
                      <div className="font-bold text-gray-900">
                        $
                        {(
                          (item.price -
                            (item.price * item.discountPercentage) / 100) *
                          item.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  </div>
                ))}
                <div>
                  <div className="flex items-center justify-around my-2 ">
                    <h1 className="font-bold text-gray-950">Subtotal</h1>
                    <span className="font-bold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-around my-2 border-t border-gray-500">
                    <h1 className="font-bold text-gray-950">Shipping</h1>
                    <span className="font-bold text-green-500">Free</span>
                  </div>
                  <div className="flex items-center justify-around my-2 border-t border-gray-500">
                    <h1 className="font-bold text-gray-950">total</h1>
                    <span className="font-bold">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={handleOrderPlace}
                  className="bg-indigo-600 p-3 w-full mx-2 rounded-md text-gray-200"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
