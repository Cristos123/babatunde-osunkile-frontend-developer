import logo from "./logo.svg";
import "./App.css";
import Banner from "./component/Banner";
import Header from "./component/Header";
import Footer from "./component/Footer";
import SearchForm from "./component/SearchForm";
import DataGrid from "./component/DataGrid";
import api from "./api";
import { useEffect, useState } from "react";
import Rocket from "./component/Roacket";
import { useGetRocketsDataQuery } from "./service/apiSlice";

function App() {
  const [tokenFetched, setTokenFetched] = useState(false);

  // const { isLoading, isError, data } = useGetSearchQuery();

  const { isLoading, isError, data } = useGetRocketsDataQuery();
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = localStorage.getItem("jwtToken");

        if (!storedToken) {
          const generatedToken = await api.generateToken();
          console.log({ generatedToken });
          localStorage.setItem("jwtToken", generatedToken);
        } else {
          console.log("Token already exists in localStorage:", storedToken);
        }

        setTokenFetched(true); // Mark token as fetched
      } catch (error) {
        console.error("Error fetching token:", error);
      }
    };

    if (!tokenFetched) {
      fetchToken();
    }
  }, [tokenFetched]);

  return (
    <>
      <Header />

      <main>
        <Banner />

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Rocket />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
