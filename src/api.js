// src/api.js
import axios from "axios";

const apiUrl = "http://localhost:8000/"; // Relative path to your PHP scripts

export const generateToken = async () => {
  try {
    const response = await axios.get(`${apiUrl}generateToken.php`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error generating token:", error);
    throw error;
  }
};

export const fetchSpaceXData = async () => {
  try {
    const token = localStorage.getItem("jwtToken"); // Get token from localStorage
    const response = await axios.get(`https://api.spacexdata.com/v3/rockets`, {
      //   headers: {
      //     Authorization: `Bearer ${token}`,
      //   },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching SpaceX data:", error);
    throw error;
  }
};
export const getVerifiedToken = async () => {
  try {
    const token = localStorage.getItem("jwtToken"); // Get token from localStorage
    const response = await axios.get(`${apiUrl}index.php`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response", response, "token", token);
    return response.data;
  } catch (error) {
    console.error("Error fetching SpaceX data:", error);
    throw error;
  }
};

export default {
  generateToken,
  fetchSpaceXData,
  getVerifiedToken,
};
