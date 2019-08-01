import axios from 'axios'
<<<<<<< HEAD
import {LOGIN, SIGNUP, SET_LAPTOPS, FILTERED_LAPTOP, COMPARE_LAPTOP, TOGGLE_COMPARE, LOGOUT, ADD_CART, DELETE_ITEM} from './actionTypes'
=======
import {LOGIN, SIGNUP, SET_LAPTOPS, FILTERED_LAPTOP, COMPARE_LAPTOP, TOGGLE_COMPARE, LOGOUT, ADD_CART, DELETE_ITEM, EDIT_USER, DELETE_COMPARE} from './actionTypes'
>>>>>>> 83a29f28b0cad2164bb26e8f9d2c40f2b9fd4685

const initialState = {
    user: {userCart: []},
    redirect: false,
    error: false,
    laptops: [],
    queries: [],
    compare: [],
    displayCompare: false

}

<<<<<<< HEAD
export const deleteItem = (laptop_id) => {
    let data = axios.delete('/api/laptops', {laptop_id}).then(res => res.data)
=======
export const deleteCompare = (laptop_id) => {
    return {
        type: DELETE_COMPARE,
        payload: laptop_id
    }
}

export const editUser = (username, id) => {
    let data = axios.put('/api/edituser', {username, id}).then(res => res.data)
    return {
        type: EDIT_USER,
        payload: data
    }
}

export const deleteItem = (laptop_id, cart_id) => {
    let data = axios.post(`/api/laptops/${laptop_id}`, {cart_id} ).then(res => res.data)
>>>>>>> 83a29f28b0cad2164bb26e8f9d2c40f2b9fd4685
    return {
        type: DELETE_ITEM,
        payload: data
    }
}

<<<<<<< HEAD
export const addToCart =  (laptop_id) => {
    let data =  axios.post('api/laptops', {laptop_id}).then(res => res.data)
=======
export const addToCart =  (laptop_id, cart_id) => {
    let data =  axios.post('/api/laptop', {laptop_id, cart_id}).then(res => res.data)
>>>>>>> 83a29f28b0cad2164bb26e8f9d2c40f2b9fd4685
    return {
        type: ADD_CART,
        payload: data
    }
}

export const logout = () => {
    return{
        type: LOGOUT,
        payload: axios.delete('/api/logout')
    }
  }

export const toggleCompare = () => {
    return {
        type: TOGGLE_COMPARE
    }
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
        case LOGOUT + '_FULFILLED':
<<<<<<< HEAD
            return {...state, user: {}}
=======
            return {...state, ...initialState}
>>>>>>> 83a29f28b0cad2164bb26e8f9d2c40f2b9fd4685
        case SET_LAPTOPS:
            return {...state, laptops: payload}
        case FILTERED_LAPTOP:
            return {...state, queries: payload}
        case COMPARE_LAPTOP:
            return {...state, compare: [...state.compare, payload]}
        case TOGGLE_COMPARE:
            return {...state, displayCompare: !state.displayCompare}
        case ADD_CART + '_FULFILLED':
<<<<<<< HEAD
            return {...state, user: {...state.user, userCart: [...state.user.userCart, payload[0]]}}
        case DELETE_ITEM + '_FULLFILLED':
            return {...state, user: {...state.user, userCart: [...state.user.userCart] }}
=======
            return {...state, user: {...state.user, userCart: payload}}
        case DELETE_ITEM + '_FULFILLED':
            return {...state, user: {...state.user, userCart: payload }}
        case EDIT_USER + '_FULFILLED':
            return {...state, user: payload}
        case DELETE_COMPARE:
            return {...state, compare: state.compare.filter(laptop => laptop.laptop_id !== payload)}
>>>>>>> 83a29f28b0cad2164bb26e8f9d2c40f2b9fd4685
        default:
         return state
    }
}