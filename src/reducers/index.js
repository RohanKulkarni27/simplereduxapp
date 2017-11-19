import { combineReducers } from 'redux';
import booksreducer from './bookreducer.js';
import ActiveBook from './selected_book.js'

const rootReducer = combineReducers({
  books:booksreducer,
  activebook:ActiveBook
});

export default rootReducer;
