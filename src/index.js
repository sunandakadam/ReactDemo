import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Count from './components/count'
import FormsComponent from './components/formsComponent'

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Count />, document.getElementById('root'));
ReactDOM.render(<FormsComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
