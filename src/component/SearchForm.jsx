import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    rocket_name: "",
    active: "",
    rocket_type: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    onSearch(searchParams);
    // setSearchParams("");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Search Form</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div>
          <label className="text-gray-700 text-sm font-semibold mb-1 block">
            Rocket Name
          </label>
          <input
            type="text"
            name="rocket_name"
            className="w-full border  rounded px-3 py-2"
            value={searchParams.rocket_name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="text-gray-700 text-sm font-semibold mb-1 block">
            Active
          </label>
          <input
            type="text"
            name="active"
            className="w-full border rounded px-3 py-2"
            value={searchParams.active}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="text-gray-700 text-sm font-semibold mb-1 block">
            Type
          </label>
          <input
            type="text"
            name="rocket_type"
            className="w-full border rounded px-3 py-2"
            value={searchParams.rocket_type}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md w-full"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
