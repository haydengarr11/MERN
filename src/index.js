import React from 'react';
//import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';  //Provider allows us to access state anytime in the app 
import { configureStore } from '@reduxjs/toolkit';
import { GoogleOAuthProvider } from '@react-oauth/google';

import reducers from './reducers';

import App from './App';
import './index.css';

const store = configureStore({reducer: reducers});

const container = document.getElementById('root');

const root = ReactDOMClient.createRoot(container);
root.render(
    <Provider store={store}>
        {/* <GoogleOAuthProvider clientId="220127504556-i0hsarqea6n8jppavtk1no3mlm8o1b1p.apps.googleusercontent.com"> */}
        <App />
        {/* </GoogleOAuthProvider> */}
    </Provider>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { legacy_createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';

// import reducers from './reducers';
// import App from './App';
// import './index.css';

// const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );

