import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "mobx-react";
import CurrentTopic from "./stores/CurrentTopic";
import TopicList from "./stores/TopicList";
import DataStore from "./stores/DataStore";
const currentTopic = new CurrentTopic();
const topic = new TopicList();
const dataStore = new DataStore();
//<React.StrictMode> document.getElementById('root')
ReactDOM.render(
  <Provider currentTopic={currentTopic} topic = {topic} dataStore = {dataStore}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
