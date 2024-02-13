import React from "react";

export const SearchBar: React.FC = () => {
  return (
    <div className="w-full">
      <input
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        type="text"
        placeholder="Buscar Video"
      />
    </div>
  );
};
