var mongoose = require("mongoose");

var booksModel = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: [{ type: String }],
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Books", booksModel);
