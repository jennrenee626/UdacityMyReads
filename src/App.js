import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './Components/MainPage'
import SearchPage from './Components/SearchPage'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: []
  }


  // To fix refresh issue for shelf change, wrap BooksAPI.getAll in a promise. Then setState wont trigger until BooksAPI.update has resolved, and it will update without having to refresh randomly
  getBooks = () => { 
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
  })}

  componentDidMount() {
    this.getBooks()
  }
  
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.getBooks()
  }

  render() {
    return (
      <div className="app">
        <Route exact path = '/' render={()=>( 
          <MainPage books={this.state.books} changeShelf={this.changeShelf}/> 
        )}/>

        <Route path = '/search' render={()=>(
          <SearchPage changeShelf={this.changeShelf}/>
        )}/>
        
      </div>
    )
  }
}

export default BooksApp
