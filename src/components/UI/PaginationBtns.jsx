import React from "react";

const PaginationBtns = ({page,totalPages,handlePageChange}) => {
  return (
    <div className="flex gap-3 items-center justify-center py-6">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="text-gray-700 bg-indigo-100 px-3 py-1 rounded-full text-sm hover:bg-amber-600 hover:text-gray-100 disabled:opacity-50">
        Prev
      </button>

      <h1
      className="bg-indigo-600 text-gray-100 font-bold rounded-full p-2">
        {page}
      </h1>
      
      <button
       onClick={() => handlePageChange(page + 1)}
       disabled={page === totalPages}
       className="text-gray-700 bg-indigo-100 px-3 py-1 rounded-full text-sm hover:bg-amber-600 hover:text-gray-100 disabled:opacity-50">
        Next
      </button>
    </div>
  );
};

export default PaginationBtns;