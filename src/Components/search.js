import React, { Component } from "react";
import "./search.css";
import axios from "axios";
import Laptop from "./laptop";
import FilteredLaptop from "./filteredLaptop";
import { connect } from "react-redux";
import {
  setLaptops,
  filteredLaptop,
  toggleCompare
} from "../redux/userReducer";
import Compare from "./compare";
import ComparedLaptops from "./comparedLaptops";
import "./compare.css";

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

  displayCompare = () => {
    this.props.toggleCompare();
  };

  render() {
    let display = [];
    if (
      this.props.displayCompare === false &&
      this.props.queries.length === 0
    ) {
      display = this.props.laptops.map(laptop => {
        return <Laptop laptop={laptop} key={laptop.laptop_id} />;
      });
    } else if (this.props.displayCompare === true) {
      display = this.props.compare.map(compare => {
        return <ComparedLaptops compare={compare} />;
      });
    } else {
      display = this.props.queries.map(laptop => {
        return <FilteredLaptop laptop={laptop} key={laptop.laptop_id} />;
      });
    }
    return (
      <div className="search-container">
        <div className="search">
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
          <select
            defaultValue="Choose Display"
            name="display"
            onChange={this.changeFunc}
          >
            <option disabled>Choose Display</option>
            <option>12.3</option>
            <option>13.3</option>
            <option>14</option>
            <option>15.6</option>
          </select>
          <select defaultValue="Choose Processor" onChange={this.changeFunc} name="processor">
            <option disabled>Choose Processor</option>
            <option>Intel i5</option>
            <option>Intel i7</option>
            <option>Intel i9</option>
            <option>Ryzen 5</option>
            <option>Ryzen 7</option>
          </select>
          <select defaultValue='Choose Video Card' onChange={this.changeFunc} name="video_card">
            <option disabled>Choose Video Card</option>
            <option>Intel HD</option>
            <option>Intel UHD</option>
            <option>Intel Iris Plus</option>
            <option>AMD Radeon</option>
            <option>NAVIDA GeForce</option>
          </select>
          <select defaultValue='Choose Memory' onChange={this.changeFunc} name="memory">
            <option disabled>Choose Memory</option>
            <option>2GB</option>
            <option>4GB</option>
            <option>8GB</option>
            <option>16GB</option>
            <option>32GB</option>
          </select>
          <select defaultValue='Choose Storage' onChange={this.changeFunc} name="storage">
            <option disabled>Choose Storage</option>
            <option>1000GB HDD</option>
            <option>256GB SSD</option>
          </select>
          <button className='filter-btn' onClick={this.filter}>Filter</button>
        </div>
        <div className={this.props.displayCompare ? 'no-wrap-laptops' : 'laptops'}>{display}</div>
        <div className="compare">
          <h3>Compare</h3>
          <div className='model-container'>
            {this.props.compare.map(laptop => {
              return <Compare laptop={laptop} key={laptop.laptop_id} />;
            })}
          </div>
          <button
            className="toggle-compare"
            onClick={() => this.displayCompare()}
          >
            Compare Toggle
          </button>
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
  { setLaptops, filteredLaptop, toggleCompare }
)(Search);
