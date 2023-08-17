import { useEffect, useState } from "react";
import api from "../api";

const useVerifiedToken = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokenData = await api.getVerifiedToken(); // Token will be retrieved from localStorage
        console.log({ tokenData });
        setToken(tokenData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return token;
};

export default useVerifiedToken;
