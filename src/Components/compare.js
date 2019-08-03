import React, {Component} from 'react'
import './compare.css'
import { connect } from "react-redux";
import {deleteCompare} from "../redux/userReducer"

class Compare extends Component {

    deleteCompare = (laptop_id) => {
        this.props.deleteCompare(laptop_id)
    }

    render(){
        const {model, laptop_id, brand} = this.props.laptop
        return(
            <div className='mini-compare'>
                {brand} {model}
                <button className='delete-compare' onClick={() => this.deleteCompare(laptop_id)}>x</button>
            </div>
        )
    }
}

export default connect(null, {deleteCompare})(Compare)
