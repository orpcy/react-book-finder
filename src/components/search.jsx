import React, { Component } from "react";
import { desc, author } from "../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Search extends Component {
  state = {
    query: "",
    books: []
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`, {
      Method: "GET"
    })
      .then(res => res.json())
      .then(data => {
        console.log("boooks", data);
        this.setState({ books: data.items });
      });
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSave = (title, authors, description, image, link) => {
    fetch("/books", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        title,
        authors,
        description,
        image,
        link
      })
    })
      .then(res => res.json())
      .then(data => toast.info("Book saved successfully"))
      .catch(err => console.log("error occured", err));
  };

  render() {
    const { books } = this.state;

    return (
      <div className="main">
        <section className="top">
          <h2>Search Book</h2>
          <div className="navbar navbar-light bg-light custom-search">
            <form onSubmit={this.handleSubmit} className="searchForm">
              <input
                onChange={this.handleChange}
                id="searchInput"
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 searchBtn"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </section>
        <div className="books-wrap">
          {books.map((b, i) => {
            const { title, description, authors, infoLink } = b.volumeInfo;
            const { thumbnail } = b.volumeInfo.imageLinks;

            return (
              <div key={i} className="book-item bg-dark">
                <h3>{title}</h3>
                <div className="book-content">
                  <div className="img-wrap">
                    <img src={thumbnail} alt={title} />
                  </div>
                  <div className="right-content">
                    <h5>{author(authors)}</h5>
                    <p>{desc(description)}</p>
                    <a href={infoLink} target="_blank">
                      Read more...
                    </a>
                  </div>
                </div>
                <div className="btn-wrap">
                  <button
                    onClick={() =>
                      this.handleSave(
                        title,
                        authors,
                        description,
                        thumbnail,
                        infoLink
                      )
                    }
                    className="btn btn-primary"
                  >
                    save
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

export default Search;
