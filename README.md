# Hapi Places
[![Build Status](https://travis-ci.org/FAC9/hapi-places.svg?branch=master)](https://travis-ci.org/FAC9/hapi-places)
[![codecov](https://codecov.io/gh/FAC9/hapi-places/branch/master/graph/badge.svg)](https://codecov.io/gh/FAC9/hapi-places)


Hapi Places is  a dynamic web application that provides the user with information about living conditions in a random city.

The primary aim of the project is for our team to learn about building servers with Hapi, rendering templates with Handlebars on the server side, practising testing with Istanbul and Tape, and generating API calls. The two apis we are using are:
- [Nomadlist](https://nomadlist.com/faq)
- [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page)

### How to check out our project

- Clone this repo
- Go into the directory and run ```npm run start``` (or ```nodemon src/server.js``` if you have nodemon installed)
- Navigate to http://localhost:8000/ in your browser
- Our app can also be [viewed online on Heroku](https://hapi-places.herokuapp.com/)

### How to run tests
- Back-End Tests: run ```npm run test``` to initiate Tape tests.

## User Stories
- When I first navigate to the app, I am presented with information about a random city. When I refresh the page, I am presented with information about a new random city.

- Underneath the image, I see a statistics chart. I can easily request a different city with better statistics in a specific area.

- Underneath the statistics chart I can read the first 3 sentences of the Wikipedia entry for the given city. The quote links to the relevant Wikipedia page. Page opens in a new tab.

- I can click on a CTA button that reads 'BOOK FLIGHTS NOW'. This will take the user to an external web page where they can browse for flights (probably SkyScanner).


### Stats chart

Below the main image there is a table which contains information about a number of metrics.

- Cost of living (i.e. average living cost for short-term inhabitants of the city in USD). Includes a button which generates a new city with cheaper cost of living.

- Current temperature (today, in celsius); 2 buttons to generate new cities with warmer / cooler temperature.

- Internet rating (average internet speed in MBPS); button to generate new city with faster internet.

- Safety (as a percentage, based on ratings provided by Nomad List, no guarantee of validity); button to generate new, safer city.

- Average coffee price (in USD, based on cappucino in local cafe); button to generate new city with cheaper coffee.


# Known issues

- The app occasionally provides incorrect results when searching with filters. As far as we can establish, this is because of an issue on the NomadList side.
