import React from "react";

const Upload = () => {
  return (
    <div className="px-4 py-10">
      <div>
        <label>
          <div className="flex justify-center items-center w-full h-48 mb-10 border-2 border-dashed active:text-gray-200 hover:text-red-100 hover:border-red-100 active:border-gray-100 transition-colors duration-200 rounded-md cursor-pointer">
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input type="file" className="hidden" />
          </div>
        </label>
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <div className="flex items-center px-2 mt-2 mb-5 border-[1px] rounded-md ring-1 ring-transparent focus-within:ring-slate-300 shadow-sm">
          <div>
            <span className="text-gray-400 pointer-events-none">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="w-full px-3 py-2 m-0 appearance-none border-none ring-1 ring-transparent focus:ring-transparent placeholder:text-gray-400"
          />
          <div>
            <span className="text-gray-400 pointer-events-none">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          rows={4}
          className="w-full mt-2 mb-5 px-2 border-[1px] border-gray-200 rounded-md ring-1 ring-transparent focus:border-transparent focus:ring-slate-300 shadow-sm"
        />
      </div>
      <button className="py-2 px-3 bg-orange-400 text-white rounded-md hover:text-orange-100 hover:bg-orange-500 active:bg-orange-400 active:text-white">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
