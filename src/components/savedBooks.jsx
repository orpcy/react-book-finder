import React, { Component } from "react";
import { desc } from "../utils";

class SavedBooks extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount() {
    fetch("http://localhost:5000/books")
      .then(res => res.json())
      .then(savedBooks => {
        this.setState({ savedBooks });
        console.log("saved", savedBooks);
      })
      .catch(err => console.log("error fetching data"));
  }

  handleDelete = id => {
    fetch(`/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(deleted => {
        console.log("deleted successfully");
        window.location = "/saved";
      })
      .catch(err => console.log("error fetching data"));
  };

  render() {
    const { savedBooks } = this.state;

    return (
      <div className="main">
        <h1 className="text-center mt-2">Saved Books</h1>
        <div className="books-wrap">
          {savedBooks.map((b, i) => {
            const { _id, title, authors, description, image, link } = b;

            return (
              <div key={i} className="book-item bg-dark">
                <h4>{title}</h4>
                <div className="book-content">
                  <div className="img-wrap">
                    <img src={image} alt="" />
                  </div>
                  <div className="right-content">
                    <h6>{authors.join(", ")}</h6>
                    <p>{desc(description)}</p>
                    <a href={link} target="_blank">
                      Read more...
                    </a>
                  </div>
                </div>
                <div className="btn-wrap">
                  <button
                    onClick={() => this.handleDelete(_id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SavedBooks;
