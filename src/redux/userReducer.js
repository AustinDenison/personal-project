import axios from 'axios'
import {LOGIN, SIGNUP, SET_LAPTOPS, FILTERED_LAPTOP, COMPARE_LAPTOP} from './actionTypes'

const initialState = {
    user: {},
    redirect: false,
    error: false,
    laptops: [],
    queries: [],
    compare: []
}

export const compareLaptop = (laptop) => {
    return {
        type: COMPARE_LAPTOP,
        payload: laptop
    }
}

export const filteredLaptop = (queries) => {
    return {
        type: FILTERED_LAPTOP,
        payload: queries
    }
}

export const setLaptops = (laptops) => {
    return {
        type: SET_LAPTOPS,
        payload: laptops
    }
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
        case SET_LAPTOPS:
            return {...state, laptops: payload}
        case FILTERED_LAPTOP:
            return {...state, queries: payload}
        case COMPARE_LAPTOP:
            return {...state, compare: payload}
        default:
         return state
    }
}