[![Build Status](https://travis-ci.org/FAC9/hapi-places.svg?branch=master)](https://travis-ci.org/FAC9/hapi-places)
[![codecov](https://codecov.io/gh/FAC9/hapi-places/branch/master/graph/badge.svg)](https://codecov.io/gh/FAC9/hapi-places)

# Hapi Places

A site that generates a profile for a random city, to provide users with useful information about living conditions. This project is for us to learn about building servers with Hapi, rendering templates with Handlebars on the server side, practicing testing with Istanbul and Tape, and generating API calls. The two apis we are using are;
- [Nomadlist](https://nomadlist.com/faq)
- [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page)
![Lovely Badger](public/images/badger.jpg)

## How to check out our project

- visit us on heroku http://hapi-places.herokuapp.com/ 
- Clone this repo
- Go into the directory and run ```npm run start``` (or ```nodemon src/server.js``` if you have nodemon installed)
- Navigate to http://localhost:8000/ in your browser
- Our app can also be viewed online on Heroku...

## How to run our tests

- Back-End Tests: run ```npm run test``` to initiate Tape tests.

# User Stories

Our site is for digital nomads looking for their new dream country based on multiple selection criteria.

As a user;
- When I first navigate to the site I am presented with information about a random city. When I refresh the page, I am presented with information about a new random city.
- At the top of the page I should see an image of the random city.
- I can see the name of the city in the center of the image.
- Underneath the image, I see a statistics chart.
- Inside the statistics chart, I first see a cost label, displaying the average living cost per month in USD. To the right of this, I see a button that says (I NEED) CHEAPER. When I click on the button, a new page loads with information about a new city, with a cheaper cost of living.
- The next row shows the current temperature of the city. To the right of this, I see two buttons, one that says (I NEED) COLDER and one that says (I NEED) WARMER. When I click on either of these, I'm presented with a new page with either a hotter/colder temperature, depending on which button I clicked.
- The next row displays the city's Internet rating, which shows either BAD/GOOD/VERY GOOD depending on the speed and availability of public WIFI. To the right of this, I see a button that says (I NEED) BETTER. When I click on this button, I'm presented with a new page with a better Internet rating.
- The next row displays the city's Air Quality rating, which is given as a percentage. To the right of this, I see a button that says (I NEED) BETTER. When I click on this button, I'm presented with a new page with a better Air Quality rating.
- The final row displays the city's Average Coffee Price, which is given in USD. To the right of this, I see a button that says (I NEED) CHEAPER. When I click on this button, I'm presented with a new page with a cheaper Average Coffee Price.
- Underneath the statistics chart, I see a paragraph long quote about the city, taken from Wikipedia.
- Underneath the quote, I see a large button, displaying 'BOOK FLIGHTS NOW'. When I click on this button, I am taken to a separate page to book flights to the city.
