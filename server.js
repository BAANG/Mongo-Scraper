const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//Scraping tools
const axios = require('axios');
const cheerio = require('cheerio');

//Requires all models in folder
const db = require("./models");

const PORT = proccess.env.PORT || 8000;

//Initialize Express.js
const app = express();

//Morgan logger for logging requests
app.use(logger('dev'));
//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static('public'));

//Connect to MongoDB

mongoose.connect("mongodb://localhost/NAME-OF-DATABASE-HERE", { useNewUrlParaser: true });

// Routes

// GET route for scraping website

app.get("/scrape", function (req, res) {
    axios.get("WEBSITE TO SCRAPE").then(function (response) {
        var $ = cheerio.load(response.data);
    })
})
