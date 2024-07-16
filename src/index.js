import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import global_pt from "./translations/pt/global.json"
import global_en from "./translations/en/global.json"
import i18next from "i18next";
import {I18nextProvider} from "react-i18next";
import {BrowserRouter} from "react-router-dom";

i18next.init({
    interpolation: {escapeValue: false},
    lng:"pt",
    resources:{
        pt:{
            global: global_pt,
        },
        en:{
            global: global_en,
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
