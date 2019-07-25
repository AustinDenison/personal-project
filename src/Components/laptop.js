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
                <img src={image} alt='item' className='laptopImage'></img>
                <h5>{model}</h5>
                {/* <p>Display: {display}</p>
                <p>Processor: {processor}</p>
                <p>Video Card: {video_card}</p>
                <p>Memory: {memory}</p>
                <p>Storage: {storage}</p>
                <p>Battery: {battery}</p>
                <p>Weight: {weight}</p> */}
                <p className='price'>${price}</p>
                <button onClick={() => this.handleCompare(this.props.laptop)}>Compare</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user;
  }

export default connect(mapStateToProps, {compareLaptop})(Laptop)