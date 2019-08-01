import React, {Component} from 'react'
import './compare.css'
<<<<<<< HEAD

class Compare extends Component {
    render(){
        const {model, display, processor, video_card, memory, storage, battery, weight, price, image} = this.props.compare
        return(
            <div className='mini-compare'>
                {model}
=======
import { connect } from "react-redux";
import {deleteCompare} from "../redux/userReducer"

class Compare extends Component {

    deleteCompare = (laptop_id) => {
        this.props.deleteCompare(laptop_id)
    }

    render(){
        const {model, laptop_id} = this.props.laptop
        return(
            <div className='mini-compare'>
                {model}
                <button onClick={() => this.deleteCompare(laptop_id)}>x</button>
>>>>>>> 83a29f28b0cad2164bb26e8f9d2c40f2b9fd4685
            </div>
        )
    }
}

<<<<<<< HEAD
export default Compare
=======
export default connect(null, {deleteCompare})(Compare)
>>>>>>> 83a29f28b0cad2164bb26e8f9d2c40f2b9fd4685
