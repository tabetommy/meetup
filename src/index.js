import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
// import * as serviceWorker from './service-worker';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';
import * as atatus from 'atatus-spa';
atatus.config('70a8b897e8a4453d97c96ae0412e7839').install();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
serviceWorkerRegistration.register()


