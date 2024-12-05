import { Book } from "../../interfaces/BookInterfaces";

export const FETCH_BOOK_REQUEST = 'FETCH_BOOK_REQUEST';
export const FETCH_BOOK_SUCCESS = 'FETCH_BOOK_SUCCESS';
export const FETCH_BOOK_FAILURE = 'FETCH_BOOK_FAILURE';
export const fetchBookRequest = () => ({
    type: FETCH_BOOK_REQUEST,
});

export const fetchBookSuccess = (bookList: Book[]) => ({
    type: FETCH_BOOK_SUCCESS,
    payload: bookList,
});

export const fetchBookFailure = (error: string) => ({
    type: FETCH_BOOK_FAILURE,
    payload: error,
});



export const CREATE_BOOK_REQUEST = 'CREATE_BOOK_REQUEST';
export const CREATE_BOOK_SUCCESS = 'CREATE_BOOK_SUCCESS';
export const CREATE_BOOK_FAILURE = 'CREATE_BOOK_FAILURE';
export const createBookRequest = (book: Book) => ({
    type: CREATE_BOOK_REQUEST,
    book:book
});

export const createBookSuccess = (book: Book) => ({
    type: CREATE_BOOK_SUCCESS,
    payload: book,
});

export const createBookFailure = (error: string) => ({
    type: CREATE_BOOK_FAILURE,
    payload: error,
});


export const DELETE_BOOK_REQUEST = 'DELETE_BOOK_REQUEST';
export const DELETE_BOOK_SUCCESS = 'DELETE_BOOK_SUCCESS';
export const DELETE_BOOK_FAILURE = 'DELETE_BOOK_FAILURE';
export const deleteBookRequest = (id: string) => ({
    type: FETCH_BOOK_REQUEST,
    id:id
});

export const deleteBookSuccess = (id: string) => ({
    type: DELETE_BOOK_SUCCESS,
    payload: id,
});

export const deleteBookFailure = (error: string) => ({
    type: DELETE_BOOK_FAILURE,
    payload: error,
});



export const UPDATE_BOOK_REQUEST = 'UPDATE_BOOK_REQUEST';
export const UPDATE_BOOK_SUCCESS = 'UPDATE_BOOK_SUCCESS';
export const UPDATE_BOOK_FAILURE = 'UPDATE_BOOK_FAILURE';
export const updateBookRequest = (book: Book) => ({
    type: UPDATE_BOOK_REQUEST,
    book:book
});

export const updateBookSuccess = (book: Book) => ({
    type: UPDATE_BOOK_SUCCESS,
    payload: book,
});

export const updateBookFailure = (error: string) => ({
    type: UPDATE_BOOK_FAILURE,
    payload: error,
});



