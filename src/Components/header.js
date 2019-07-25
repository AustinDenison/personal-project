import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Login from "./login";
import Signup from "./signup";
import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();

    this.state = {
      displayLogin: false,
      displaySignup: false
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
        <Link to="/">Logo</Link>
        <Link to="/search">Search</Link>
        <Link to="/cart">Cart</Link>
        {
          this.props.user.username
          ?
          <p>{this.props.user.username}</p>
          :
          <button onClick={() => this.handleLogin()}>Login</button>
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
