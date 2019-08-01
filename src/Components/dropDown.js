import React, { Component } from "react";
import { connect } from "react-redux";
import './dropDown.css'
import {logout} from '../redux/userReducer'
import EditUser from './editUser'
import {Link} from 'react-router-dom'

class DropDown extends Component {
  constructor() {
    super();

    this.state = {
      dropdown: false
    };
  }

  dropMenu = () => {
    this.setState({
      dropdown: !this.state.dropdown
    });
  };


  handleLogout = () => {
    this.props.logout()
 
  }

  render() {
    let dropDown = [];
    if (this.state.dropdown === true) {
       dropDown.push(
        <div className="dropdown-content">
          <Link to="/">
          <div className='logout' onClick={() => {this.handleLogout()}}>Logout</div>
          </Link>
          <EditUser />
        </div>
      );
    }
    return (
      <div>
        <div className="dropBtn" onClick={this.dropMenu}>
          {this.props.user.username}
        </div>
        {dropDown}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(mapStateToProps, {logout})(DropDown);
