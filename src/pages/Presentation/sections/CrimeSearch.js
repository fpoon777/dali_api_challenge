import axios from "axios";

const API_URL = "https://data.lacity.org/resource/2nrs-mtv8.json";
const APP_TOKEN = "HeRh9jWNo87cXq1pzv8w2X0YN";

const crimeSearch = () => {
  const params = {
    $limit: 500,
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
