import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "mobx-react";
import YourStore from "./stores/YourStore";
import TopicList from "./stores/TopicList";
const yourstore = new YourStore();
const topic = new TopicList();
//<React.StrictMode> document.getElementById('root')
ReactDOM.render(
  <Provider yourstore={yourstore} topic = {topic}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
