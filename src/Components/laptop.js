import React, {Component} from 'react'
import './laptop.css'
import { connect } from "react-redux";
import {compareLaptop, addToCart} from '../redux/userReducer'

class Laptop extends Component {

    handleCompare = (laptop) => {
        this.props.compareLaptop(laptop)    
    }

    handleAdd = (laptop_id) => {
            this.props.addToCart(laptop_id, this.props.user.cart_id)
    }

    render() {
        const {model, price, image, laptop_id, brand} = this.props.laptop
        return(
            <div className='laptop-container'>
                <div className='image-container'>
                <img  className='laptopImage' src={image} alt='item'></img>
                </div>
                <div className='spec'>
                <h5 className='l-model'>{brand} {model}</h5>
                <p className='price'>${price}</p>
                <div className='btn-container'>
                <button className='btn' onClick={() => this.handleCompare(this.props.laptop)}>Compare</button>
                <button className='btn' onClick={() => this.handleAdd(laptop_id)}>Add To Cart</button>
                </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return state.user;
  }

export default connect(mapStateToProps, {compareLaptop, addToCart})(Laptop)