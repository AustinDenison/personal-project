import React, {Component} from 'react'
import './login.css'
import { connect } from 'react-redux';
import {login} from '../redux/userReducer'

class Login extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = (value) => {
        this.setState({
            username: value
        })
    }

    handlePassword = (value) =>  {
        this.setState({
            password: value
        })
    }
    
    handleSwitch = () => {
        this.props.handleSignup()
        this.props.loseLogin()
    }

    handleLogin = () => {
        this.props.login(this.state.username, this.state.password)
        this.props.loseLogin()
    }

    render(){
        console.log(this.props)
        return(
            <div className='login'>
                <h4 className='title-login'>Login</h4>
                <input placeholder='username' onChange={e => this.handleUsername(e.target.value)} />
                <input placeholder='password' onChange={e => this.handlePassword(e.target.value)} />
                <button onClick={() => this.handleLogin()}>Login</button>
                <button onClick={() => this.handleSwitch()}>Signup</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.user
}

export default connect(mapStateToProps, {login})(Login)