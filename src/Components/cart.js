import React, { Component } from "react";
import "./cart.css";
import { connect } from "react-redux";
import {deleteItem} from '../redux/userReducer'

class Cart extends Component {

    handleDelete = (laptop_id) => {
      console.log('hit', laptop_id)
        this.props.deleteItem(laptop_id)
    }

  render() {
    console.log(this.props)
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
                  <h5>{item.model}</h5>
                  <p className="p">${item.price}</p>
                  <button onClick={() => this.handleDelete(item.laptop_id)}>Delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.user;
}

export default connect(mapStateToProps, {deleteItem})(Cart);
