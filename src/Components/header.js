import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Login from "./login";
import Signup from "./signup";
import { connect } from 'react-redux';
import DropDown from './dropDown'

class Header extends Component {
  constructor() {
    super();

    this.state = {
      displayLogin: false,
      displaySignup: false,
    };
  }

  handleLogin = () => {
    if (this.state.displaySignup) {
      this.setState({
        displaySignup: false
      });
    }
    this.setState({
      displayLogin: true
    });
  };

  loseLogin = () => {
    this.setState({
      displayLogin: false
    });
  };

  handleSignup = () => {
    this.setState({
      displaySignup: true
    });
  };

  render() {
    return (
      <div className="header">
        <Link className='logo-link' to="/">Logo</Link>
        <Link className='search-link' to="/search">Search</Link>
        <Link className='cart-link' to="/cart">Cart</Link>
        {
          this.props.user.username
          ?
          <DropDown />
          :
          <button className='login-btn' onClick={() => this.handleLogin()}>Login</button>
        }
        {this.state.displayLogin ? (
          <Login handleSignup={this.handleSignup} loseLogin={this.loseLogin} />
        ) : null}
        {this.state.displaySignup ? <Signup /> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return  state.user
}


export default connect(mapStateToProps)(Header);
