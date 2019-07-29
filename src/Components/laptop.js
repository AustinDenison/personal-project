import React, {Component} from 'react'
import './laptop.css'
import { connect } from "react-redux";
import {compareLaptop, addToCart} from '../redux/userReducer'

class Laptop extends Component {

    handleCompare = (laptop) => {
        this.props.compareLaptop(laptop)    
    }

    handleAdd = (laptop) => {
        this.props.addToCart(laptop)
    }

    render(){
        const {model, display, processor, video_card, memory, storage, battery, weight, price, image} = this.props.laptop
        return(
            <div className='laptop-container'>
                <div className='image-container'>
                <img  className='laptopImage' src={image} alt='item'></img>
                </div>
                <div className='spec'>
                <h5>{model}</h5>
                <p className='price'>${price}</p>
                <div>
                <button onClick={() => this.handleCompare(this.props.laptop)}>Compare</button>
                <button onClick={() => this.handleAdd(this.props.laptop)}>Add To Cart</button>
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