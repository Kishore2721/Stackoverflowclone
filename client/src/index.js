import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'; // fixed typo in createStore
import { thunk } from "redux-thunk"; // Correct: importing as named export
 // Correct import

import reducers from './reducers';

// Create the Redux store
const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Create root element for React rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App wrapped in the Redux Provider
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

// Measure performance, optional
reportWebVitals();
