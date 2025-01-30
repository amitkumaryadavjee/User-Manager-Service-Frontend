import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ViewUser from './components/ViewUser';
import { Store } from 'redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
// import store from './redux/store';
import {RootState} from './redux/store';
import { getUserById } from './services/userService';

const mockStore = configureStore([]);
jest.mock('./services/userService', () => ({
  getUserById: jest.fn(),
}));


describe('ViewUser Component', () => {
  let store: Store<RootState>;

  beforeEach(() => {
    store = mockStore({
      userReducer: {
        // Provide default values or mock values for userReducer
        users: [], // example, adjust based on your actual reducer's state structure
        user: null,
        loading: false,
        error: null,
      },
    }) as Store<RootState>;;
  });
  

  test('renders user details when data is fetched', async () => {
    const mockUser = {   "id": 1,"firstName": "Emily",
      "age": 28,
      "gender": "female",
      "email": "emily.johnson@x.dummyjson.com"};
    (getUserById as jest.Mock).mockResolvedValueOnce({ user: mockUser });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/view/1']}>
          <Routes>
            <Route path="/view/:id" element={<ViewUser />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
  });

  test('renders error message on failure', async () => {
    (getUserById as jest.Mock).mockRejectedValueOnce(new Error('User not found'));

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/view/1']}>
          <Routes>
            <Route path="/view/:id" element={<ViewUser />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    await waitFor(() => expect(screen.getByText('User not found.')).toBeInTheDocument());
  });
});
