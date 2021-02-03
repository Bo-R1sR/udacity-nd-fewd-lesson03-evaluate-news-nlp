# NLP Analysis

This software uses the Sentiment Analysis API from www.meaningcloud.com to process a nlp analysis on entered
blogs or news articles.

## how to?

Simply start the node server available in /src/server/index.js and browse to localhost:8081
In the form field you can enter an url to an existing article you want to check.
Press submit and wait a few seconds vor the api to react.

The result will give you a probability on how subjective and ironic the text of the checked page is.

## technical details

This project uses webpack for creating a production or development environment.
Simply type npm run build-dev or npm run build-prod you update the code or let the development server run.

All files for production can be found in the dist-folder.