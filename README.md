# DALI API & Platform Challenge Submission

### Name: Ke Lou

## Overview
Three APIs are used. The first [API](https://data.lacity.org/Public-Safety/Crime-Data-from-2020-to-Present/2nrs-mtv8) is Los Angeles Crime Incidents API. The second [API](https://rapidapi.com/apidojo/api/realty-in-us/) is U.S. real estate API. And the third [API](https://developer.tomtom.com/maps-sdk-web-js/documentation#Maps.Marker) TomTom Map API. Users can see latest crimes that happen in the City of Los Angeles and try to avoid them when they're looking for latest house listings. 

* [Crime API](https://data.lacity.org/Public-Safety/Crime-Data-from-2020-to-Present/2nrs-mtv8)
* [Realty API](https://rapidapi.com/apidojo/api/realty-in-us/)
* [TomTom](https://developer.tomtom.com/maps-sdk-web-js/documentation#Maps.Marker)

## Instructions 📋
1. To start, call `npm install --legacy-peer-deps`
2. To run, call `npm start`

## How it works:
The website's UI is modified from MUI template. There are three APIs used. TomTom Map WebSDK API is an API provide by TomTom Map. `TomTomMap.js` calls the `crimeSearch()` function that is imported from `CrimeSearch.js` and calls the `houseSearch()` function that is imported from `HouseSearch.js`. 

The former communicates with City of LA crime database and gathers 200 latest crime incidents in the City of LA. There are four types of markers indicating the crime type: burglary, robbery, assault with deadly weapons, and other crimes. Each is represented by a different icon. Upon clicking the icon, the popup element shows the crime type related to the incident. 

The latter gathers the houses for sale listings from the API DOJO. It gathers 49 single family houses that have sale prices higher than $400,000 in L.A. If the user click the marker, a popup element will show the price and the address of the house. The popup is a hyperlink and the user can directly go to the external listing website by clicking the popup element. 

Crime information and house listings information are displayed in the TomTom Map. Users can drag and zoom in and out of the map to have a better view of the house/crime relationship and avoid looking at houses around high crime areas. 

There is also an author page. The user can view the profile and there is a link to my personal startup website (I didn't make it by myself). 

## Website:
The website is hosted by github pages at: `https://fpoon777.github.io/dali_api_challenge`

## Tips
* There is a 500 requests limit per month for the real estate API.
* TomTom has a daily requests limit of 5000.
