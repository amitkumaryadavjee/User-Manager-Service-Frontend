import { all } from "redux-saga/effects";
import * as bookSaga from "./sagas/bookSaga";
export default function* rootSaga() {
  yield all([
    bookSaga.fetchBookRequest(),
    bookSaga.createBookRequest(),
    bookSaga.updateBookRequest(),
    bookSaga.deleteBookRequest(),
  ]);
}
