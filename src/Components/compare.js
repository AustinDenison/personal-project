import React, {Component} from 'react'
import './compare.css'
import { connect } from "react-redux";

class Compare extends Component {

    deleteCompare = () => {
        this.props.compare.splice(1)
    }

    render(){
        const {model} = this.props.compare
        return(
            <div className='mini-compare'>
                {model}
                <button onClick={this.deleteCompare}>x</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user;
  }

export default connect(mapStateToProps)(Compare)