import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = "https://api.spacexdata.com/v3/rockets";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
  }),
  tagTypes: ["Pro", "User"],
  endpoints: (builder) => ({
    getRocketsData: builder.query({
      query: () => `/`,
    }),

    getRocketsDetails: builder.query({
      query: (rocket_id) => `/${rocket_id}`,
    }),
    getSearch: builder.query({
      query: (data) => `/${data}`,
    }),
  }),
});

export const {
  useGetRocketsDataQuery,
  useGetSearchQuery,
  useGetRocketsDetailsQuery,
} = apiSlice;
