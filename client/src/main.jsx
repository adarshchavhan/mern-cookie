import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.scss'
import {Provider} from 'react-redux'
import { persistor, store } from './redux/store.js'
import axios from 'axios'
import { PersistGate } from 'redux-persist/integration/react'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
)
