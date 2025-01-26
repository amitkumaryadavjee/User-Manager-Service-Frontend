import { AnyAction } from 'redux';

import { User } from "../../interfaces/UserInterfaces";

import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    CREATE_USER_SUCCESS ,CREATE_USER_FAILURE,DELETE_USER_FAILURE,DELETE_USER_SUCCESS,
    UPDATE_USER_SUCCESS,UPDATE_USER_FAILURE
   
} from '../actions/userActions';

interface UserState {
    users: User[];
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    user: null,
    loading: false,
    error: null,
};

export const userReducer = (state = initialState, action: AnyAction): UserState => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, loading: true };
        case FETCH_USER_SUCCESS:
            return { ...state, loading: false, users: action.payload };
        case FETCH_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case CREATE_USER_SUCCESS:
            return { ...state, loading: false,
                users: [...state.users, action.payload],user: action.payload };
        case CREATE_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case UPDATE_USER_SUCCESS:
            return { ...state, loading: false,
                users: state.users.map((b) => 
                    b.id === action.payload.id ? action.payload : b
                ) , user: action.payload };
        case UPDATE_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case DELETE_USER_SUCCESS:
            return { 
                ...state, 
                loading: false, 
                users: state.users.filter((b) => b.id !== action.payload) // Remove the deleted user
            };
        case DELETE_USER_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
