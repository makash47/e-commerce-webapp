import axios from "axios";

// const api = axios.create({
//     baseURL:"https://dummyjson.com/"
// })

export const api = axios.create({
    baseURL:"https://api.escuelajs.co/api/v1"
})

// export const getTrendingProducts = () =>{
//     return api.get("/products");
// }

// export const getSingleProductData = (id) =>{
//     return api.get(`/products/${id}`)
// }

// export const getApiData = () =>{
//     return api.get("/products")
// }

// export const searchProducts = (query, limit, skip) => {
//     return api.get( `/products/search?q=${query}&limit=${limit}&skip=${skip}`);

// }
// export const getApiData = () =>{
//     return api.get("/products")
// }