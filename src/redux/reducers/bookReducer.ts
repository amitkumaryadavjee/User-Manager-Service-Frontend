import { AnyAction } from 'redux';

import { Book } from "../../interfaces/BookInterfaces";

import {
    FETCH_BOOK_REQUEST,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_FAILURE,
    CREATE_BOOK_SUCCESS ,CREATE_BOOK_FAILURE,DELETE_BOOK_FAILURE,DELETE_BOOK_SUCCESS,
    UPDATE_BOOK_SUCCESS,UPDATE_BOOK_FAILURE
   
} from '../actions/bookActions';

interface BookState {
    books: Book[];
    book: Book | null;
    loading: boolean;
    error: string | null;
}

const initialState: BookState = {
    books: [],
    book: null,
    loading: false,
    error: null,
};

export const bookReducer = (state = initialState, action: AnyAction): BookState => {
    switch (action.type) {
        case FETCH_BOOK_REQUEST:
            return { ...state, loading: true };
        case FETCH_BOOK_SUCCESS:
            return { ...state, loading: false, books: action.payload };
        case FETCH_BOOK_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case CREATE_BOOK_SUCCESS:
            return { ...state, loading: false,
                books: [...state.books, action.payload],book: action.payload };
        case CREATE_BOOK_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case UPDATE_BOOK_SUCCESS:
            return { ...state, loading: false,
                books: state.books.map((b) => 
                    b.id === action.payload.id ? action.payload : b
                ) , book: action.payload };
        case UPDATE_BOOK_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case DELETE_BOOK_SUCCESS:
            return { 
                ...state, 
                loading: false, 
                books: state.books.filter((b) => b.id !== action.payload) // Remove the deleted book
            };
        case DELETE_BOOK_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
