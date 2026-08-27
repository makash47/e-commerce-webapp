import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cart,setCart] = useState(()=>{
            const cartData = localStorage.getItem("cart");
            return cartData?JSON.parse(cartData):[];
    
    });


    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart])


    const addToCart =(product)=>{
        setCart([
            ...cart,
            {
                ...product,
                quantity:1
            }
        ])

    }

    const increaseQuantity = (id)=>{
        setCart(
            cart.map(item=>item.id===id?
            {
                ...item,
                quantity:item.quantity+1
            }:
            item
        )
    )
    }

    const decreaseQuantity=(id)=>{
        setCart(
            cart.map(item=>item.id===id?
                {
                   ...item,
                   quantity:item.quantity>1?item.quantity-1:1
                }:
                item
            )
        )    
    }

     const removeProductFromCart = (id) =>{
            setCart(
            cart.filter(item=>item.id!==id)
        )
        toast.error("Product removed From cart")
      }
      
    const isInCart = (id) => {
    return cart.some((item)=> item.id === id);
  };
    
     const totalPrice = cart.reduce((total, item) => {
    return total + item.price*item.quantity;
}, 0);
    return (
    <CartContext.Provider 
    value= {{cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeProductFromCart,
        totalPrice,
        isInCart
    }}>
        {children}
    </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
// const {cart,setCart} = useContext(CartContext);