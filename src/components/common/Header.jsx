import { useState } from "react";
import { NavLink } from "react-router-dom";
import {CiHeart,CiShoppingCart,CiUser} from "react-icons/ci";
import {RiCloseFill,RiMenu5Fill} from "react-icons/ri";
import { useCart } from "../../context/CartContext";
import { useFav } from "../../context/FavContext";
import LoginButton from "../auth/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../auth/LogoutButton";
import { FaHeart } from "react-icons/fa";



const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "About",
    path: "/about",
  },
];

const Header = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {cart} = useCart()
  const {favourite} = useFav()

  const {isAuthenticated,user} = useAuth0();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

      
        <NavLink
          to="/"
          className="flex items-center gap-3 group"
        >
          <span className="text-2xl font-bold text-indigo-600">
            ShopHub
          </span>
        </NavLink>

        
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-slate-600 hover:text-indigo-600 hover:bg-slate-100"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

      
        <div className="relative hidden md:flex items-center gap-2">

          <NavLink to="/favourite" className="p-2 rounded-full hover:bg-slate-100 hover:text-amber-600 transition-all duration-300 hover:scale-110">
            <CiHeart size={28} />
            {
              favourite.length>0 && <span className="bg-amber-600 w-3 h-3 rounded-2xl absolute top-1 left-6"></span>
            }
          </NavLink>

          <NavLink
            to="/cart"
            className="relative p-2 rounded-full hover:bg-slate-100 hover:text-amber-600 transition-all duration-300 hover:scale-110"
          >
            <CiShoppingCart size={28} />

            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-amber-600 text-white text-[11px] font-semibold flex items-center justify-center shadow">
              {cart.length}
            </span>
          </NavLink>

          {
            isAuthenticated?(
               <div className="flex gap-1.5">
                <img src={user.picture} alt="" className="w-10 h-10 rounded-full" />
                <h1 className="flex items-center justify-center">{user.name}</h1>
                
               <LogoutButton/>
               </div>
             
            ):
            (
               <LoginButton/>
            )
          }

    

        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-3xl text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <RiCloseFill />
          ) : (
            <RiMenu5Fill />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen
            ? "max-h-96"
            : "max-h-0"
        }`}
      >
        <div className="border-t border-slate-200 bg-white px-6 py-5 space-y-3">

          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 transition-all duration-300
                ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 font-semibold"
                    : "hover:bg-slate-100 text-slate-700"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}

          <div className="flex items-center justify-between pt-4 border-t">

            <NavLink
             to="/favourite" className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 transition-all">
              {favourite.length>0?
              <FaHeart size={26}/>:
              <CiHeart size={26}/>
              }
              Wishlist
            </NavLink>

            <NavLink
              to="/cart"
              className="flex items-center gap-2 text-slate-700 hover:text-indigo-600 transition-all"
            >
              <CiShoppingCart size={26} />
              {cart.length}
            </NavLink>

            {
            isAuthenticated?(
               <div className="flex gap-1.5">
                <img src={user.picture} alt="" className="w-10 h-10 rounded-full" />
                <h1 className="flex items-center justify-center">{user.name}</h1>
                
               <LogoutButton/>
               </div>
             
            ):
            (
               <LoginButton/>
            )
          }

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;