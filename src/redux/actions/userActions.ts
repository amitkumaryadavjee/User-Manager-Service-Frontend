import { User } from "../../interfaces/UserInterfaces";

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const fetchUserRequest = () => ({
    type: FETCH_USER_REQUEST,
});

export const fetchUserSuccess = (userList: User[]) => ({
    type: FETCH_USER_SUCCESS,
    payload: userList,
});

export const fetchUserFailure = (error: string) => ({
    type: FETCH_USER_FAILURE,
    payload: error,
});



export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const createUserRequest = (user: User) => ({
    type: CREATE_USER_REQUEST,
    user:user
});

export const createUserSuccess = (user: User) => ({
    type: CREATE_USER_SUCCESS,
    payload: user,
});

export const createUserFailure = (error: string) => ({
    type: CREATE_USER_FAILURE,
    payload: error,
});


export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
export const deleteUserRequest = (id: number) => ({
    type: DELETE_USER_REQUEST,
    id:id
});

export const deleteUserSuccess = (id:number) => ({
    type: DELETE_USER_SUCCESS,
    payload: id,
});

export const deleteUserFailure = (error: string) => ({
    type: DELETE_USER_FAILURE,
    payload: error,
});



export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const updateUserRequest = (user: User) => ({
    type: UPDATE_USER_REQUEST,
    user:user
});

export const updateUserSuccess = (user: User) => ({
    type: UPDATE_USER_SUCCESS,
    payload: user,
});

export const updateUserFailure = (error: string) => ({
    type: UPDATE_USER_FAILURE,
    payload: error,
});



