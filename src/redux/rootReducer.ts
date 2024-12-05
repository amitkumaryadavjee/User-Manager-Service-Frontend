import { combineReducers } from "@reduxjs/toolkit";
import { bookReducer } from './reducers/bookReducer';

const rootReducer = combineReducers({
  bookReducer: bookReducer, 
  });
  
export default rootReducer;



