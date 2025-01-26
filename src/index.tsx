import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <App />
</Provider>
);

reportWebVitals();
