import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Props from './props/Props';
import reportWebVitals from './reportWebVitals';
import Home1 from "./home/Home1";
import Home2 from "./home/Home2";
import Form from "./forms/Form";
import UnconditionalForm from "./forms/UnconditionalForm";
import RouterMenu from "./RouterMenu";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*  <Home2/>*/}
    {/*  <Home2/>*/}
    {/*  <Form/>*/}
    {/*  <UnconditionalForm/>*/}
      <RouterMenu/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
