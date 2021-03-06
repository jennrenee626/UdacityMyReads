import React, { Component } from 'react'
import ChangeShelf from './ChangeShelf'

class Book extends Component {
    state= {}

    render() {
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${this.props.book.imageLinks && this.props.book.imageLinks.thumbnail}')`}}>
                </div>
                    <ChangeShelf book={this.props.book} changeShelf={this.props.changeShelf} currentShelf={this.props.currentShelf}/>
                </div>
            
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )
    }
}

export default Book