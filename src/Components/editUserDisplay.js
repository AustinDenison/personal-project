import React, {Component} from 'react'
import './editUserDisplay.css'
import { connect } from 'react-redux';
import {editUser} from "../redux/userReducer"

class EditUserDisplay extends Component {
    constructor(){
        super()

        this.state = {
            newUsername: ''
        }
    }

    handleEdit = (username, id) => {
        this.props.editUser(username, id)
    }

    handleChange = (e) => {
        this.setState({
            newUsername: e
        })
    }

    render(){
        return (
            <div className='edit-user'>
                <h4 className='title-edit'>Edit User</h4>
                <input className='username-input' placeholder='New Username' onChange={e => this.handleChange(e.target.value)}></input>
                <button className='change-username' onClick={() => this.handleEdit(this.state.newUsername, this.props.user.id)} >Edit</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return  state.user
  }

export default connect(mapStateToProps, {editUser})(EditUserDisplay)