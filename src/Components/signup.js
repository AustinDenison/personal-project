import React, {Component} from 'react'
import './signup.css'
import { connect } from 'react-redux';
import {signup} from '../redux/userReducer'
import './login.css'

class Signup extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleUsername = (value) => {
        this.setState({
            username: value
        })
    }

    handleEmail = (value) => {
        this.setState({
            email: value
        })
    }

    handlePassword = (value) => {
        this.setState({
            password: value
        })
    }

    render(){
        return(
            <div className='signup'>
                <h4 className='title-signup'>Signup</h4>
                <input className='username-input' placeholder='username' onChange={e => this.handleUsername(e.target.value)} />
                <input className='email-input' placeholder='email' onChange={e => this.handleEmail(e.target.value)} />
                <input className='password-input' placeholder='password' onChange={e => this.handlePassword(e.target.value)} />
                <button className='signupBtn' onClick={() => this.props.signup(this.state.username, this.state.email, this.state.password)}>Signup</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state.user)
    return state.user
}

export default connect(mapStateToProps, {signup})(Signup) 