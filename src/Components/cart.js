import React, { Component } from "react";
import "./cart.css";
import { connect } from "react-redux";

class Cart extends Component {

    handleDelete = () => {
        this.props.cart.splice(1)
    }

  render() {
    return (
      <div className="cart">
        <div className="item-container">
          {this.props.cart.map(item => {
            return (
              <div className="item">
                <div className="img-container">
                  <img className="item-img" src={item.image} alt="item" />
                </div>
                <div className="item-info">
                  <h5>{item.model}</h5>
                  <p className="p">${item.price}</p>
                  {/* <button onClick={this.handleDelete()}>Delete</button> */}
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

export default connect(mapStateToProps)(Cart);
