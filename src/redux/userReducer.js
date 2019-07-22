import axios from 'axios'
import {LOGIN, SIGNUP} from './actionTypes'

const initialState = {
    user: {},
    redirect: false,
    error: false
}

export const login = (username, password) => {
    let data = axios.post('/api/login', {username, password}).then(res => res.data)
    return {
        type: LOGIN,
        payload: data
    }
}

export const signup = (username, email, password) => {
    let data = axios.post('/api/signup', {username, email, password}).then(res => res.data)
    return {
        type: SIGNUP,
        payload: data
    }
}

export default function(state = initialState, action){
    let {type, payload} = action
    switch (type) {
        case LOGIN + '_FULFILLED':
            return {...state, user: payload, redirect: false, error: false}
        case LOGIN + '_REJECTED':
            return {...state, error: payload}
        case SIGNUP + '_FULFILLED':
            return {...state, redirect: false, user: payload, error: false}
        case SIGNUP + '_REJECTED':
            return {...state, error: payload}
        default:
         return state
    }
}