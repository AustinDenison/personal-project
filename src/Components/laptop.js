import React, {Component} from 'react'
import './laptop.css'
import { connect } from "react-redux";
import {compareLaptop} from '../redux/userReducer'

class Laptop extends Component {

    handleCompare = (laptop) => {
        this.props.compareLaptop(laptop)    
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
                <button onClick={() => this.handleCompare(this.props.laptop)}>Compare</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user;
  }

export default connect(mapStateToProps, {compareLaptop})(Laptop)