// import React from "react";

// const Sort = ({ search, setSearch,sort,setSort,showFilters,setShowFilters}) => {

//   return (
//     <div className="my-5">
//       <div className="flex items-center justify-between flex-wrap gap-2.5">
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e)=>{
//         setSearch(e.target.value);
//         }}
//         className="w-full md:w-96 border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"/>

//         <div>
//           <select name="sort" id="sort" value={sort} onChange={(e)=>setSort(e.target.value)} className="border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500">
//             <option value="featured">Featured</option>
//             <option value="lowtohigh">Price:Low to High</option>
//             <option value="hightolow">Price:High to Low</option>
//             <option value="toprated">Top Rated</option>
//           </select>
//         </div>

//  <div className="lg:hidden mb-5">
// <button className="bg-indigo-600 py-1 px-2 text-gray-100 rounded-md"
//  onClick={()=>setShowFilters(true)}>Filters
// </button>
// </div>
//         </div>

//     </div>
//   )
// }

// export default Sort;