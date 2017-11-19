import React, { Component } from 'react';
import BookList from '../Containers/booklist.js';
import BookDetail from '../Containers/book_Detail.js';
export default class App extends Component {
  render() {
    return (
      <div>
      <BookList />
      <BookDetail />
      </div>
    );
  }
}
