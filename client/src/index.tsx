import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer , {getTotals} from "./store/cardStore"
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const stores = configureStore({
  reducer: {
      cart: cartReducer
  }
})

stores.dispatch(getTotals())

root.render(
  <Provider store={stores}>
    <App />
  </Provider>
);

