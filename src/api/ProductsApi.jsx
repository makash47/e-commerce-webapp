import { api } from "./DummyApi"


export const getProducts = async ({search="", category="",minPrice="",maxPrice="",page=1}) => {
    const params = {};
    const limit = 12;
    const offset = (page-1)*limit
    if(search){
        params.title = search;
    }
    if(category){
        params.categorySlug = category;
    }
    if(minPrice){
        params.price_min = minPrice;
    }
    if(maxPrice){
        params.price_max=maxPrice;
    }

    params.limit = limit;
    params.offset = offset;
    
    const res = await api.get("/products", {
        params
    });
    return res.data;
};



export const getProductBySlug = async(slug)=>{
    const response = await api.get(`/products/slug/${slug}`);
    return response.data;
}


export const getRelatedProductsById = async(id)=>{
    const response = await api.get(`/categories/${id}/products`)
    return response.data;
}

export const getCategories = async() =>{
    const response = await api.get("/categories")
    return response.data
}