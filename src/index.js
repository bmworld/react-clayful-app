// app.js => Routing담당 JS
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Install Bootstrap // app.js 또는 index.js에 설치하면됨
import Clayful from 'clayful/client-js';
import axios from 'axios';
import "./css/auth.css";

Clayful.config({
  client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjljNTc3NzdmNGU3MGNkMzg5N2U3NjhhMjdlNTFhZmEyYTIwMzc4MDc5MzI1MjY1Y2IyMTUzZmM4NjAyY2JlNjIiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQ2NTY3MDE5LCJzdG9yZSI6IlBTV0FaNlJXNlkzWi4zUFNDS0I5TkhCTTUiLCJzdWIiOiJRU1FNS0E2MkhRVzcifQ.R6ryRZIIisDzRNTlDlY2Upg9QMjWOH-o1PF-6k4GEU0'
});

// or when using axios
Clayful.install('request', require('clayful/plugins/request-axios')(axios)); // clayful에서 사용할 AXIOS연결



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
