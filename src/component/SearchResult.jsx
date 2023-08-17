import React from "react";
import { useSearchParams } from "react-router-dom";
import { useGetSearchQuery } from "../service/apiSlice";

export const SearchResult = () => {
  //   let searcZipCode = useSearchParams.get("rocket_name");
  const [searchParams] = useSearchParams();
  //   const searcZipCode = searchParams.get("rocket_name");
  //   const queryParams = Object.fromEntries(searchParams.entries());
  //   console.log({ queryParams });

  //   apiUrl += `?rocketName=${rocketName}&active=${active}&type=${type}`;

  let queryParams = [];
  if (searchParams.get("rocket_name")) {
    queryParams.push(searchParams.get("rocket_name"));
  }
  if (searchParams.get("active")) {
    queryParams.push(searchParams.get("active"));
  }
  if (searchParams.get("type")) {
    queryParams.push(searchParams.get("type"));
  }

  let queryString = "";
  if (queryParams.length === 3) {
    queryString = `${queryParams[0]}/${queryParams[1]}/${queryParams[2]}`;
  } else if (queryParams.length === 2) {
    queryString = `${queryParams[0]}/${queryParams[1]}`;
  } else if (queryParams.length === 1) {
    queryString = `/${queryParams[0]}`;
  }
  console.log({ queryString, queryParams });
  //   const queryParams = [];
  //   if (searchParams.rocket_name !== "") {
  //     queryParams.push(searchParams.rocket_name);
  //     console.log("earchParams.rocket_name", searchParams.rocket_name);
  //   }
  //   if (searchParams.active !== "") {
  //     queryParams.push(searchParams.active);
  //   }
  //   if (searchParams.type !== "") {
  //     queryParams.push(searchParams.type);
  //   }

  //   const queryString = queryParams.join("/");
  console.log({ queryString });
  const originalQueryString = queryString; // Your encoded query string
  const decodedQueryString = decodeURIComponent(
    originalQueryString.replace(/_/g, "%20")
  );

  console.log({ decodedQueryString }); // This will output 'falcon 1'

  const { isLoading, isError, data } = useGetSearchQuery(queryString);
  console.log({ data });
  return <div>SearchResult</div>;
};
