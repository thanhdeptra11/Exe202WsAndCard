import React, { useState } from "react";
import { IconSearch, IconShoppingCart, IconMoodPuzzled } from "@tabler/icons-react";
function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex gap-5 items-center px-5 py-1.5 rounded border border-gray-200 bg-white shadow-sm">
      <form className="flex items-center gap-3" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <IconSearch size={18} stroke={1.8} className={`transition-colors duration-300 ${isFocused ? "text-red-400" : "text-gray-700"}`} />
        <input
          type="text"
          id="search"
          placeholder="Tìm kiếm món ăn..."
          className="bg-transparent border-none focus:outline-none text-sm"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </form>
      <div className="flex items-center gap-3">
        <div className="shrink-0 w-px h-6 bg-gray-300" />
        <button aria-label="User profile" className="focus:outline-none hover:text-red-400">
          <IconMoodPuzzled size={20} stroke={1.8} className={`transition-colors duration-300 ${isFocused ? "text-red-400" : "text-gray-700"}`} />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
