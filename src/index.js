import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './reducers'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'bulma/css/bulma.css';
import './styles.scss';

const rootElement = document.getElementById('root');


const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, rootElement);
