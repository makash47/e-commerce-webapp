import React, { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";

const Filters = ({categories = [],category,setCategory,minPrice,maxPrice,handlePriceChange,clearFilters}) => {
  
  const [localPrice, setLocalPrice] = useState([minPrice, maxPrice]);
 
  useEffect(() => {
    setLocalPrice([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  return (
    <div className="space-y-6">

      {/* Categories */}
      <div>
        <h2 className="text-xl font-bold mb-3">Categories</h2>
        <div className="flex flex-col gap-2">
          {categories.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                checked={category === item.slug}
                onChange={() => setCategory(item.slug)}
              />
              <span>
                {item.name.length < 30 ? item.name : item.name.slice(0, 30) + "..."}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h2 className="text-xl font-bold mb-3">Price Range</h2>
        
        <div className="px-2 py-4">
          <Slider
            value={localPrice}
            min={0}
            max={5000}
            step={10}
            onValueChange={(values) => {
              setLocalPrice(values);
            }}
            onValueCommitted={(values) => {
              handlePriceChange(values[0], values[1]);
            }}
            className="w-full"
          />
        </div>
        <p className="text-gray-600 mt-2">
          ${localPrice[0]} - ${localPrice[1]}
        </p>
      </div>

      <div className="flex items-center justify-center">
        <button className="bg-indigo-600 px-2 py-1 text-gray-100 rounded-md " 
        onClick={clearFilters}>Clear Filters</button>
      </div>
    </div>
  );
};

export default Filters;

