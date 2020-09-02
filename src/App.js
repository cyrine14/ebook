import React, { Component } from "react";
import './App.css';
import Books from './components/Books';
import Filter from './components/Filter';
import 'bootswatch/dist/darkly/bootstrap.min.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { books:[], filteredBooks:[] }
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleChangeGenre = this.handleChangeGenre.bind(this);  
  }

componentWillMount(){
  fetch("http://localhost:8000/books").then(res => res.json())
  .then(data => this.setState({
    books: data,
    filteredBooks: data
  }));
}
handleChangeSort(e){
  this.setState({sort: e.target.value});
  this.listBooks();
}
handleChangeGenre(e){ 
  this.setState({genre: e.target.value});
  this.listBooks();
}
listBooks(){
  this.setState(state => {
    if(state.sort !==''){
      state.books.sort((a,b)=>(state.sort==='lowest')? (a.price <b.price? 1:-1): (a.price>b.price))
    } else {
      state.books.sort((a,b)=>(a.id <b.id? 1:-1));
    }
    if (state.genre !==''){
      return {filteredBooks: state.books.filter(a=>a.book_genre.indexOf(state.genre)>=0)}

    }
    return {filteredBooks: state.books};
  })
}
  render() {
    return (

    <div className="container">
      <h1>E-Books</h1>  
      
    
      <hr />
          <div className="row">
            <div className="col-md-9">
<Filter genre={this.state.genre} sort={this.state.sort} handleChangeGenre={this.handleChangeGenre} handleChangeSort={this.handleChangeSort} count={this.state.filteredBooks.length}/> 
<hr/>
<Books books={this.state.filteredBooks} handleAddToCart={this.handleAddToCart} /> 
            </div>
            <div className="col-md-3">
          
            </div> 
          </div>
        </div>

);
}
}

export default App;
