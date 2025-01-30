import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
  fetchUserSuccess, fetchUserFailure, FETCH_USER_REQUEST, CREATE_USER_REQUEST,
  createUserSuccess, createUserFailure, deleteUserSuccess, deleteUserFailure,
  UPDATE_USER_REQUEST, updateUserSuccess, updateUserFailure, DELETE_USER_REQUEST

} from "../actions/userActions";
import { User } from '../../interfaces/UserInterfaces'

const backendBaseUrl = "http://localhost:8080";

function* fetchUserList(action: any): Generator<any, void, any> {
  const requestURL = backendBaseUrl + `/api/users`;

  try {
    const response: AxiosResponse<User[]> = yield call(axios.get, requestURL);
    const data: User[] = response.data;
    yield put(fetchUserSuccess(data));
  } catch (err: any) {
    console.error("Error:", err.message);
    yield put(fetchUserFailure(err.message));
  }
}

export function* fetchUserRequest() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUserList);
}

function* createUser(action: any): Generator<any, void, any> {
  const requestURL = backendBaseUrl + `/api/users/create`;
  try {
    let requestBody = action.user;

    const response: AxiosResponse<User> = yield call(axios.post, requestURL, requestBody);
    const data: User = response.data;
    yield put(createUserSuccess(data));
  } catch (error: any) {
    yield put(createUserFailure(error.response.data.message));
  }
}

export function* createUserRequest() {
  yield takeLatest(CREATE_USER_REQUEST, createUser);
}


function* deleteUser(action: any): Generator<any, void, any> {
  const requestURL = backendBaseUrl+`/api/users/delete/${action.id}`
  try {

    const response: AxiosResponse<string> = yield call(axios.delete, requestURL);
    yield put(deleteUserSuccess(action.id));
  } catch (error: any) {
    yield put(deleteUserFailure(error.response.data.message));
  }
}

export function* deleteUserRequest() {
  yield takeLatest(DELETE_USER_REQUEST, deleteUser);
}


function* updateUser(action: any): Generator<any, void, any> {
  const requestURL = backendBaseUrl + `/api/users/update/${action.user.id}`;
  try {
    let requestBody = action.user;
    const response: AxiosResponse<User> = yield call(axios.put, requestURL, requestBody);
    const data: User = response.data;
    yield put(updateUserSuccess(data));
  } catch (error: any) {
    yield put(updateUserFailure(error.response.data.message));
  }
}

export function* updateUserRequest() {
  yield takeLatest(UPDATE_USER_REQUEST, updateUser);
}

