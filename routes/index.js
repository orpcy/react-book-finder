let express = require('express');
const bookRoutes = require("./booksRoute.js");

const app = express();

app.use('/', bookRoutes);

module.exports = app;