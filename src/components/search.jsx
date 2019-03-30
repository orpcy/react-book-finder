import React, { Component } from "react";

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
    console.log(title);
    console.log(authors);
    console.log(description);
    console.log(image);
    console.log(link);
  };

  render() {
    return (
      <div className="search">
        <h2>Search</h2>
        <nav className="navbar navbar-light bg-light">
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
        </nav>
        <ul>
          {this.state.books.map((b, i) => {
            const {title, description, authors} = b.volumeInfo;
            const { thumbnail } = b.volumeInfo.imageLinks;
            const { infoLink } = b.volumeInfo;

            return (
              <li key={i}>
                <h4>{title}</h4>
                <p>{description}</p>
                <button
                  onClick={() => this.handleSave(title, authors, description, thumbnail, infoLink)}
                  className="btn btn-primary"
                >
                  save
                </button>
                <button className="btn btn-success p-0"><a href={infoLink} target="_blank">View</a></button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Search;
