import React from 'react';
//import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';  //Provider allows us to access state anytime in the app 
import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';

import App from './App';

const store = configureStore({reducer: reducers});

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);
root.render(
    <Provider store={store}>
        <App /> 
    </Provider>
);

