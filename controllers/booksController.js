const Books = require("../models/booksModel");

//add book
module.exports.addBook = (req, res) => {
  const bookDetails = req.body;
  Books.create(bookDetails, (err, value) => {
    if (err) {
      res.send(err);
    }
    res.json(value);
  });
};

//get all book
module.exports.getAllBooks = (req, res) => {
  Books.find((err, web) => {
    if (err) {
      res.send(err);
    }
    res.json(web);
  });
};

// delete a book
module.exports.deleteBook = (req, res) => {
  const _id = req.params._id;
  Books.findByIdAndRemove({ _id }, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};
