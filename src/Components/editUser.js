import React, {Component} from 'react'
import EditUserDisplay from './editUserDisplay'

class EditUser extends Component {
    constructor(){
        super()

        this.state = {
            toggleEdit: false
        }
    }

    toggleEdit = () => {
        this.setState({
            toggleEdit: !this.state.toggleEdit
        })
    }

    render(){
        return (
            <div>
              {this.state.toggleEdit ? <EditUserDisplay /> : null}
              <div className='edit-user-btn' onClick={this.toggleEdit}>Edit User</div>
            </div>
        )
    }
}

export default EditUser