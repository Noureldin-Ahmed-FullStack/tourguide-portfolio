import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import global_en from "./Translation/en/global.json"
import global_ru from "./Translation/ru/global.json"
import i18next from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: { global: global_en },
    ru: { global: global_ru }
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18next={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>,
)
