import React from "react";
// import bannerImage from "../assets/banner-image.jpg"; // Import your banner image

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      <img
        src={"/assets/image/Europe_s_rockets_pillars.jpg"}
        alt="SpaceX Banner"
        className="w-full h-auto"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Explore the SpaceX Universe
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the latest advancements in space technology.
        </p>
        <button className="bg-white text-blue-500 hover:bg-blue-200 px-6 py-2 rounded-full font-semibold transition duration-300 ease-in-out">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Banner;
