import { combineReducers } from 'redux'
import books from './books';
import settings from './settings'
import words from './words'
import auth from './auth'


export default combineReducers({
    books,
    settings,
    words,
    auth
})