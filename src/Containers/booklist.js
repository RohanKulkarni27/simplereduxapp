import React, { Component } from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index.js';
import { bindActionCreators } from 'redux';

class BookList extends Component{
renderbooklist(){
    return this.props.books.map((book)=>{
      var x=book.Title;
      return(
        <li onClick={()=>this.props.selectBook(book)}  key={book.Title} className="list-group-item">{book.Title}</li>
      );
    });
}
  render(){
    return(
      <ul className="list-group col-sm-4">
      {this.renderbooklist()}
      </ul>
    );
  }
  //clickf(book){
  //  var x=book.Title;
  //  alert(x);
  //}
}


/*
function handle(book){
  var x = book.Title;
  alert(x);
}
*/
function mapstatetoprops(state){
  //Whatever value from this function will be returned the booklist class as props
  return{
    books:state.books
  };
}

//The value dispatched from here will be used by the booklist container as a prop
function mapdispatchtoprops(dispatch){
  //Whenever the selectBook is called the result should be passed to the booklist
  //container.
  return bindActionCreators({selectBook:selectBook},dispatch);
}

//This function is used to make prop available to the booklist container in
//the form of dispatch
export default connect(mapstatetoprops,mapdispatchtoprops)(BookList);
