let express = require("express");
const { addBook, getAllBooks, deleteBook } = require("../controllers/booksController");

const app = express();

//post book route
app.post("/books", addBook);

//get books route
app.get("/books", getAllBooks);

//delete book route
app.delete("/books/:_id", deleteBook);

module.exports = app;