import React, { Component } from "react";


export default class Books extends Component {

   
   
    render() {
        const bookItems = this.props.books.map(book => (
            <div className="col-md-4" key={book.id}>
            <div className="thumbnail text-center">
              <a
                href={`#${book.id}`}
                onClick={ this.props.handleAddToCard}>

                <img className="image-book" src={`/books/${book.sku}.png`} alt={book.title} />
                <p>{book.title}</p>
                
              </a>
              <div>
                  <b>{book.price} TND</b>
                  &nbsp;
                  &nbsp;
                  &nbsp;
                  <button className="btn btn-outline-warning" onClick={(e)=> this.props.handleAddToCard(e, book)}> Add to Cart</button>
                 
              </div>
         
            </div>
          </div>
        )
        )
        return (
         <div className="row">
            {bookItems}
        </div>
        )
    }
  }

