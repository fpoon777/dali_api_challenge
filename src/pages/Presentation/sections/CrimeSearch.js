import axios from "axios";

require("dotenv").config();

const API_URL = process.env.REACT_APP_CRIME_API_URL;
const APP_TOKEN = process.env.REACT_APP_CRIME_APP_TOKEN;

const crimeSearch = () => {
  const params = {
    $limit: 200,
    $$app_token: APP_TOKEN,
  };
  return new Promise((resolve, reject) => {
    axios
      .get(API_URL, { params })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(`crime api error: ${error}`);
        reject(error);
      });
  });
};

export default crimeSearch;
