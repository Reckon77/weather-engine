# Weather engine

Weather engine is a simple web application to get the current weather data of a location.

## To run the app locally

1. clone the git repository
2. cd into the folder
3. run command "npm i"
4. run command "node src/app.js"

##### Note1 : Make sure that NodeJS is installed in your system.

##### Note2 : To use the app, you would require OpenWeather and Mapbox api keys :

1. Get your OpenWeather and Mapbox api keys, refer [openweathermap.org/api](https://openweathermap.org/api) and [docs.mapbox.com/api/overview/](https://docs.mapbox.com/api/overview/)

2. Create a .env file and write this code (replace "forecast" and "geocode" with the openweather and mapbox api keys respectively)

```

FORECAST = forecast
GEOCODE = geocode

```

## How it works

- The user enters the location in the search bar
- The entered location then passed as a query to the Mapbox API
- The Mapbox API reverse geocodes the location and returns the corresponding latitude and longitude of the location entered.
- The latitude and longitude are then passed as a query in the open weather API, which returns the current weather information of that location.

## Required packages

- axios

- dotenv

- express

- hbs

## Folder Structure

- public/: Contains views functionality logics, script, and styles.

- templates/: Contains HTML files for rendering on views.

- src/: Main script files for running the NodeJS application.
