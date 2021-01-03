import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { createStore} from 'redux';
import {Provider} from 'react-redux'

import  reminders from './reducers'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import Home from './components/Home';


const store = createStore(reminders)

ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>,
    document.getElementById('root')
)