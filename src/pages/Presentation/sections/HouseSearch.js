import axios from "axios";

const API_URL = 'https://realty-in-us.p.rapidapi.com/properties/list-for-sale';
const APP_TOKEN = '3962386b51msh235050748fb19a3p184f63jsn36be7a17896a'
const API_HOST = 'realty-in-us.p.rapidapi.com'

const houseHeaders = {
    'x-rapidapi-host': API_HOST,
    'x-rapidapi-key': APP_TOKEN,
}

const houseSearch = () => {
    let houseParams = {
      state_code: 'CA',
      city: 'Los Angeles',
      offset: '0',
      limit: '200',
      sort: 'relevance',
      prop_type: 'single_family',
      price_min: '400000',
      is_foreclosure: 'false',
      // lat_max: '100',
      // lat_min: '10',
      // lng_max: '100',
      // lng_min: '10'
    }
    let options = {
        method: 'GET',
        url: API_URL,
        params: houseParams,
        headers: houseHeaders
    }
    return new Promise((resolve, reject) => {
        axios
          .request(options)
          .then((response) => {
            console.log("response.data", response.data);
            resolve(response.data);
          })
          .catch((error) => {
            // eslint-disable-next-line no-console
            console.log("house api error: ", error);
            reject(error);
          });
      });
}

export default houseSearch;