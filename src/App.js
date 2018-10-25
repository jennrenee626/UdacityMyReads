import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './Components/MainPage';
import SearchPage from './Components/SearchPage';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
  }

  render() {
    return (
      <div className="app">
        <MainPage 
          books={this.state.books}
          changeShelf={this.changeShelf}
        />
        <SearchPage/>
      </div>
    )
  }
}

export default BooksApp
