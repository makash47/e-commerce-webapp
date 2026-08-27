import { createContext, useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const FavContext = createContext();

export const FavProvider = ({children})=>{
    const [favourite,setFavourite] = useState(()=>{
        const getFavourite = localStorage.getItem("Favourite");
        return getFavourite?JSON.parse(getFavourite):[];
    })


    useEffect(()=>{
        localStorage.setItem("Favourite",JSON.stringify(favourite))
    },[favourite])

    const addToFav = (product) =>{
        const existingFav = favourite.find(item=>item.id===product.id)
        if(existingFav){
            return
        }
        else{
            setFavourite([
                ...favourite,
                product
            ])
        }
    }

    const removeFromFav = (id) =>{
        setFavourite(
      favourite.filter(item=>item.id!==id))

      toast.error("Removed From Favourites")

    }

    const isInFav = (id) =>{
     return favourite.some(item=>item.id===id)
    }


    return <FavContext.Provider value={{favourite,addToFav,removeFromFav,isInFav}}>
        {children}
    </FavContext.Provider>
}

export const useFav = () => useContext(FavContext)