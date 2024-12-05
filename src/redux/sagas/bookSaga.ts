import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// import { fetchBookSuccess, fetchBookFailure } from '../actions/bookActions';
import { SagaIterator } from "redux-saga";
import { fetchBookSuccess,fetchBookFailure, FETCH_BOOK_REQUEST,CREATE_BOOK_REQUEST,
    createBookSuccess ,createBookFailure,deleteBookSuccess,deleteBookFailure,
    UPDATE_BOOK_REQUEST,updateBookSuccess,updateBookFailure

} from "../actions/bookActions";

function fetchBookApi() {
    return axios.get('/api/book'); // Your Spring Boot API endpoint
}

function* fetchBook(): SagaIterator  {
    try {
        const response : any = yield call(fetchBookApi);
        yield put(fetchBookSuccess(response.data));
    } catch (error: any) {
        yield put(fetchBookFailure(error.message));
    }
}

function* fetchBookList(action: any): Generator<any, void, any> {
    const requestURL = `http://localhost:8081/book`;

    try {
        const response: Response = yield call(() => fetch(requestURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }));

        console.log("Response object:", response);

        // Check if the response is okay
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the response as JSON
        const data: any = yield call([response, 'json']);

        console.log("Parsed data:", data);
        yield put(fetchBookSuccess(data));
    } catch (err: any) {
        console.error("Error:", err.message);
        yield put(fetchBookFailure(err.message));
    }
}
  
export  function* fetchBookRequest() {
    yield takeLatest(FETCH_BOOK_REQUEST, fetchBookList);
  }

function* createBook(action: any): Generator<any, void, any> {
  const requestURL = 'http://localhost:8080/book/create';
  try {
    const response: Response = yield call(fetch, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify(action.book),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = yield call([response, 'json']);
    yield put(createBookSuccess(data));
  } catch (error: any) {
    yield put(createBookFailure(error));
  }
}

export function* createBookRequest() {
  yield takeLatest(CREATE_BOOK_REQUEST, createBook);
}


function* deleteBook(action: any): Generator<any, void, any> {
  const requestURL =`http://localhost:8080/book/${action.payload.id}`
  try {
    const response: Response = yield call(fetch, requestURL, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }  
    yield put(deleteBookSuccess(action.payload.id));
  } catch (error: any) {
    yield put(deleteBookFailure(error));
  }
}

export function* deleteBookRequest() {
  yield takeLatest(FETCH_BOOK_REQUEST, deleteBook);
}


function* updateBook(action: any): Generator<any, void, any> {
    const requestURL = 'http://localhost:8080/book/update';
    try {
      const response: Response = yield call(fetch, requestURL, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify(action.book),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = yield call([response, 'json']);
      yield put(updateBookSuccess(data));
    } catch (error: any) {
      yield put(updateBookFailure(error));
    }
  }
  
  export function* updateBookRequest() {
    yield takeLatest(UPDATE_BOOK_REQUEST, updateBook);
  }

  