import React from "react";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-blue-500 border-solid"></div>
    </div>
  );
};
