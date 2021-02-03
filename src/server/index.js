// include functionality to exclude api key to .env-file
const dotenv = require('dotenv');
dotenv.config();
// get fetch functionality for node
const fetch = require('node-fetch');

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

const getResponseFromApi = async function (req, res) {
    const response = await fetch('https://api.meaningcloud.com/sentiment-2.1?key=' + process.env.API_KEY + '&lang=en&url=' + req.query.url);
    try {
        res.send(await response.json());
    } catch (error) {
        console.log("error", error);
    }
};

app.get('/callApi', getResponseFromApi)


