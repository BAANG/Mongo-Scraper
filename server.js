const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path')

//Scraping tools
const axios = require('axios');
const cheerio = require('cheerio');

//Requires all models in folder
const db = require("./models");

const PORT = process.env.PORT || 8000;

//Initialize Express.js
const app = express();

//Morgan logger for logging requests
app.use(logger('dev'));
//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static('public'));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "/views/layouts/partials")
}));
app.set("view engine", "handlebars");


//Connect to MongoDB

mongoose.connect("mongodb://localhost/NAME-OF-DATABASE-HERE", { useNewUrlParaser: true });

// Routes

// GET route for scraping website

app.get("/", function (req, res) {
    axios.get("WEBSITE TO SCRAPE").then(function (response) {
        var $ = cheerio.load(response.data);
    })
    res.render("index")
})

// Listen on port
app.listen(PORT, function () {
    console.log("App running on port " + PORT);
});