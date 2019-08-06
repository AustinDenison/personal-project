import React, { Component } from "react";
import "./cart.css";
import { connect } from "react-redux";
import { deleteItem } from "../redux/userReducer";
import Checkout from "./checkout";

class Cart extends Component {
  constructor(props){
    super(props)

    this.state = {
      total: props.user.userCart.reduce((prev, curr) => curr.price + prev, 0)
    }
  }

  handleDelete = laptop_id => {
    this.props.deleteItem(laptop_id, this.props.user.cart_id);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.user.userCart.length !== this.props.user.userCart.length){
      this.setState({
        total: this.props.user.userCart.reduce((prev, curr) => curr.price + prev, 0)
      })
    }
  }

  render() {
    return (
      <div className="cart">
        <div className="item-container">
          {this.props.user.userCart.map(item => {
            return (
              <div className="item">
                <div className="img-container">
                  <img className="item-img" src={item.image} alt="item" />
                </div>
                <div className="item-info">
                  <div className='item-model'>{item.model}</div>
                  <p className="checkout-price">${item.price}</p>
                  <div className='delete-btn'>
                    <button className='x' onClick={() => this.handleDelete(item.laptop_id)}>
                      x
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className='checkout-container'>
          <div className='total'>Total: ${this.state.total}</div>
          <div className='checkout-btn'><Checkout total={this.state.total}/></div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(
  mapStateToProps,
  { deleteItem }
)(Cart);
