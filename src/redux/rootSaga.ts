import { all } from "redux-saga/effects";
import * as userSaga from "./sagas/userSaga";
export default function* rootSaga() {
  yield all([
    userSaga.fetchUserRequest(),
    userSaga.createUserRequest(),
    userSaga.updateUserRequest(),
    userSaga.deleteUserRequest(),
  ]);
}
