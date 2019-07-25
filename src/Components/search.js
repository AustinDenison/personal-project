import React, { Component } from "react";
import "./search.css";
import axios from "axios";
import Laptop from "./laptop";
import FilteredLaptop from "./filteredLaptop";
import { connect } from "react-redux";
import { setLaptops, filteredLaptop } from "../redux/userReducer";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      brand: "null",
      display: "null",
      processor: "null",
      video_card: "null",
      memory: "null",
      storage: "null",
      price: 0
    };
  }

  componentDidMount() {
    axios.get(`/api/laptops`).then(res => {
      this.props.setLaptops(res.data);
    });
  }

  filter = () => {
    let queryString = "?";
    console.log("hit comp");
    for (let key in this.state) {
      queryString += `&${key}=${this.state[key]}`;
    }
    console.log(queryString);
    axios.get(`/api/laptops/${queryString}`).then(res => {
      this.props.filteredLaptop(res.data);
    });
  };

  changeFunc = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    this.props.compare.map(compare => {
      const {model, display, processor, video_card, memory, storage, battery, weight, price, image} = compare
    })
    return (
      <div className="search-container">
        <div className="search">
          <p>Brand</p>
          <select
            defaultValue="Choose Brand"
            name="brand"
            onChange={this.changeFunc}
          >
            <option disabled>Choose Brand</option>
            <option>HP</option>
            <option>Asus</option>
            <option>Dell</option>
            <option>Alienware</option>
            <option>Lenovo</option>
            <option>Razer</option>
            <option>Acer</option>
            <option>Microsoft</option>
            <option>Huawei</option>
            <option>Apple</option>
          </select>
          <p>Display</p>
          <select
            defaultValue="Choose Display"
            name="display"
            onChange={this.changeFunc}
          >
            <option disabled>Choose Display</option>
            <option>10-12 inches</option>
            <option>13-14 inches</option>
            <option>15-16 inches</option>
            <option>17-18 inches</option>
          </select>
          <p>Processor</p>
          <select />
          <p>Video Card</p>
          <select />
          <p>Memory</p>
          <select />
          <p>Storage</p>
          <select />
          <p>Price</p>
          <select />
          <button onClick={this.filter}>Filter</button>
        </div>
        <div className="laptops">
          {this.props.queries.length === 0
            ? this.props.laptops.map(laptop => {
                return <Laptop laptop={laptop} key={laptop.laptop_id} />;
              })
            : this.props.queries.map(laptop => {
                return <FilteredLaptop queries={laptop} key={laptop.laptop_id} />;
              })}
        </div>
        <div className="compare" >
          <h3>Compare</h3>
          <p></p>
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
  { setLaptops, filteredLaptop }
)(Search);
