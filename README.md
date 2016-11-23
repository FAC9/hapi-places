# Hapi Places

Hapi Places will be a dynamic web application that generates a profile for a random city, providing user with useful information about living conditions and a number of other factors that might influence their decision to relocate. 

The reason behind the project is for our team to learn about building servers with Hapi, rendering templates with Handlebars on the server side, practising testing with Istanbul and Tape, and generating API calls. The two apis we are using are:
- [Nomadlist](https://nomadlist.com/faq)
- [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page)

## How to check out our project

- Clone this repo
- Go into the directory and run ```npm run start``` (or ```nodemon src/server.js``` if you have nodemon installed)
- Navigate to http://localhost:8000/ in your browser
- Our app can also be viewed online on Heroku...

## How to run our tests

- Back-End Tests: run ```npm run test``` to initiate Tape tests.

# User Stories

As a user...

- When I first navigate to the app, I am presented with information about a random city. When I refresh the page, I am presented with information about a new random city.
- At the top of the page I see an image of the random city.
- I can see the name of the city in the center of the image.
- Underneath the image, I see a statistics chart.

## Stats chart

I can view a table with 3 columns. Each row provides info about a specific metric:

- Cost of living (i.e. average living cost for short-term inhabitants of the city in USD); button generates new city with cheaper cost of living
- Current temperature (today, in celsius); 2 buttons to generate new cities with warmer / cooler temperature
- Internet rating (average internet speed in MBPS); button to generate new city with faster internet
- Safety (as a percentage, based on ratings provided by Nomad List, no guarantee of validity); button to generate new, safer city
- Average coffee price (in USD, based on cappucino in local cafe); button to generate new city with cheaper coffee

## More info

- Underneath the statistics chart I can read the first 3 sentences of the Wikipedia entry for the given city. The quote links to the relevant Wikipedia page. Page opens in a new tab.
- I can click on a CTA button that reads 'BOOK FLIGHTS NOW'. This will take the user to an external web page where they can browse for flights (probably SkyScanner).

# Known issues

The app occasionally provides incorrect results when searching with filters. As far as we can establish, this is because of an issue on the NomadList side.
