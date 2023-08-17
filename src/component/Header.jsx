import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" py-4 fixed w-full z-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="flex items-center">
          <img
            src="/logo512.png" // Replace with the actual path to your logo
            alt="SpaceX Logo"
            className="h-8 mr-2"
          />
          <span className="text-white text-2xl md:text-3xl font-semibold">
            SpaceX Data Explorer
          </span>
        </h1>
        <nav className="space-x-4">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/rockets" className="text-white hover:underline">
            Rockets
          </Link>
          <Link to="/capsules" className="text-white hover:underline">
            Capsules
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
