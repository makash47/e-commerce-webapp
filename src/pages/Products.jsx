import React, { useEffect, useState } from "react";
import ProductsList from "../components/UI/ProductsList";
import { useQuery } from "@tanstack/react-query";
import Filters from "../components/UI/Filters";
import PaginationBtns from "../components/UI/PaginationBtns";
import Loader from "../components/UI/Loader";
import { getCategories, getProducts } from "../api/ProductsApi";
import Search from "../components/UI/Search";
import { useSearchParams } from "react-router";

const Products = () => {
  const [searchParams,setSearchParams] = useSearchParams()

  const urlSearch = searchParams.get("search") || "";
  const urlCategory = searchParams.get("category") || "";
  const urlMinPrice = searchParams.get("price_min") || "";
  const urlMaxPrice = searchParams.get("price_max") || "";
  const urlPage = Number(searchParams.get("page"))||1;

  const [searchInput,setSearchInput] = useState(urlSearch);
  const [search,setSearch] = useState(urlSearch);
  const [category,setCategory] = useState(urlCategory);
  const [minPrice,setMinPrice] = useState(urlMinPrice?(Number(urlMinPrice)):0);
  const [maxPrice,setMaxPrice] = useState(urlMaxPrice?(Number(urlMaxPrice)):5000);
  const [page,setPage] = useState(urlPage);

  const [showFilters, setShowFilters] = useState(false);
 
  const { data, isLoading } = useQuery({
    queryKey: ["products",search,category,minPrice,maxPrice,page],
    queryFn:()=>getProducts({search,category,minPrice,maxPrice,page}),
  });

const { data: categories = [] } = useQuery({
  queryKey: ["categories"],
  queryFn: getCategories,
});

  const handleSearch = () =>{
    setSearch(searchInput)
    if(searchInput){
      setSearchParams({
      search:searchInput

      })
      // setSearchInput("")
    }
      else{
        setSearchInput("")
    }
  }

  const handleCategory = (slug) => {
    setCategory(slug);
    setSearchParams({
        ...(search && {search}),
        ...(slug && {category:slug})
    });

}

const handlePriceChange = (min,max) =>{
  setMinPrice(min);
  setMaxPrice(max);

  setSearchParams({
    ...(search && {search}),
    ...(category && {category}),
    ...(min && {price_min:min}),
    ...(max && {price_max:max}),
  })
}

const handlePageChange = (newPage)=>{
 setPage(newPage);
 setSearchParams({
   ...(search && {search}),
   ...(category && {category}),
   ...(minPrice && { price_min:minPrice}),
   ...(maxPrice && { price_max:maxPrice}),
   page:newPage
 });
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// pagination
const totalProducts = data?.total || 0;

const productsPerPage = 12;

const totalPages = Math.ceil(
  totalProducts / productsPerPage
);
// console.log(totalPages)



const clearFilters = () =>{
  setSearchInput("");
  setSearch("");
  setCategory("");
  setMinPrice(0);
  setMaxPrice(5000)
  setPage(1)
  setSearchParams({});
}


  if (isLoading) return <Loader/>;
  
  // console.log(data)

  return (
    <>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="col-span-1 hidden lg:block">
            <Filters
            categories={categories}
            category={category}
            setCategory={handleCategory}
            minPrice={minPrice}
            maxPrice={maxPrice}
            handlePriceChange={handlePriceChange}
            clearFilters={clearFilters}
            />
          </div>

          <div className="col-span-3">
            <div>
              <Search 
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              handleSearch={handleSearch}
              />
          {/* button for mobile filters */}
           <button onClick={() => setShowFilters(true)}
           className="lg:hidden bg-indigo-600 text-white px-4 py-2 rounded-lg mb-4">Filters</button>
           
              <ProductsList
               products={data}
              />
              
              <PaginationBtns
              page={page}
              totalPages={totalPages}
              handlePageChange={handlePageChange}/>
            </div>
          </div>
        </div>
      </div>
{/* mobile filters */}

 {showFilters && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className="absolute left-0 top-0 h-full w-80 bg-white p-5 overflow-y-auto"
          onClick={()=>setShowFilters(false)}>
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold">Filters</h2>
              <button onClick={() => setShowFilters(false)}
                className="text-red-500">
                Close
              </button>
            </div>

            <Filters
             categories={categories}
            category={category}
            setCategory={handleCategory}
            minPrice={minPrice}
            maxPrice={maxPrice}
            handlePriceChange={handlePriceChange}
            clearFilters={clearFilters}
            />
        </div>
       </div>
      )}
    </>
  );
};

export default Products;




