import React, { useState } from "react";
import RocketCard from "./DataGrid";
import { useGetRocketsDataQuery } from "../service/apiSlice";
import useVerifiedToken from "./UseVerifiedToken";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

const Rocket = () => {
  const token = useVerifiedToken();
  const { isLoading, isError, data } = useGetRocketsDataQuery();

  const [searchResults, setSearchResults] = useState([]);
  console.log({ data, token });

  if (token?.isVerified) {
    if (isLoading) {
      return <Loading />;
    }
    const handleSearch = async (searchParams) => {
      const filteredResults = await data?.find((rocket) => {
        const isRocketNameMatch =
          !searchParams.rocket_name ||
          rocket.rocket_name.includes(searchParams.rocket_name);

        const isActiveMatch =
          searchParams.active === null || rocket.active === searchParams.active;

        const isTypeMatch =
          !searchParams.rocket_type ||
          rocket.rocket_type
            .toLowerCase()
            .includes(searchParams.rocket_type.toLowerCase());

        return isRocketNameMatch, isActiveMatch, isTypeMatch;
      });
      console.log({ filteredResults });
      setSearchResults(filteredResults);
    };

    console.log(
      { searchResults },
      "searchResults.length",
      searchResults.length
    );
    return (
      <>
        <div className="container mx-auto py-8">
          <h1 className="text-2xl font-semibold mb-4">SpaceX Rockets</h1>
          <SearchForm onSearch={handleSearch} />
          {searchResults?.length === 0 && (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {data?.map((rocket) => (
                <Link
                  key={rocket.rocket_id}
                  to={`/rockets/${rocket.rocket_id}`}
                >
                  <RocketCard key={rocket.id} rocket={rocket} />
                </Link>
              ))}
            </div>
          )}
          {searchResults?.length > 0 && (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {searchResults?.map((rocket) => (
                <Link
                  key={rocket.rocket_id}
                  to={`/rockets/${rocket.rocket_id}`}
                >
                  <RocketCard key={rocket.id} rocket={rocket} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </>
    );
  }
};

export default Rocket;
