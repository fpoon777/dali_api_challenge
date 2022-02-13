import axios from "axios";

require("dotenv").config();

const API_URL = process.env.REACT_APP_HOUSE_API_URL;
const APP_TOKEN = process.env.REACT_APP_HOUSE_APP_TOKEN;
const API_HOST = process.env.REACT_APP_HOUSE_API_HOST;

const houseHeaders = {
  "x-rapidapi-host": API_HOST,
  "x-rapidapi-key": APP_TOKEN,
};

const houseSearch = () => {
  const houseParams = {
    state_code: "CA",
    city: "Los Angeles",
    offset: "0",
    limit: "200",
    sort: "relevance",
    prop_type: "single_family",
    price_min: "400000",
    is_foreclosure: "false",
  };
  const options = {
    method: "GET",
    url: API_URL,
    params: houseParams,
    headers: houseHeaders,
  };
  return new Promise((resolve, reject) => {
    axios
      .request(options)
      .then((response) => {
        resolve(response.data.listings);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log("house api error: ", error);
        reject(error);
      });
  });
};

export default houseSearch;
