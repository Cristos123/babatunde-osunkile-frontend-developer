import React from "react";

const RocketCard = ({ rocket, onRocketClick }) => {
  console.log({ rocket });
  return (
    <div className="bg-white rounded p-4 mb-4 cursor-pointer">
      <img
        src={rocket?.flickr_images[0]} // Replace with actual image URL
        alt={rocket?.rocket_name}
        className="w-full h-32 object-cover mb-2 rounded"
      />
      <h2 className="text-xl font-semibold mb-2">{rocket?.rocket_name}</h2>
      <p className="text-gray-600">{rocket?.country}</p>
      <p className="text-gray-600 py-3">{rocket?.company}</p>
    </div>
  );
};

export default RocketCard;
