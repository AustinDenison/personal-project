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
        return <FilteredLaptop queries={laptop} key={laptop.laptop_id} />;
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
            <option>10-12 inches</option>
            <option>13-14 inches</option>
            <option>15-16 inches</option>
            <option>17-18 inches</option>
          </select>
          <select defaultValue="Choose Processor">
            <option disabled>Choose Processor</option>
            <option>Intel Core i3</option>
            <option>Intel Core i5</option>
            <option>Intel Core i7</option>
            <option>Intel Core i9</option>
            <option>Ryzen 5</option>
            <option>Ryzen 7</option>
          </select>
          <select defaultValue='Choose Video Card'>
            <option disabled>Choose Video Card</option>
          </select>
          <select defaultValue='Choose Memory'>
            <option disabled>Choose Memory</option>
          </select>
          <select defaultValue='Choose Storage'>
            <option disabled>Choose Storage</option>
          </select>
          <select defaultValue='Choose Price'>
            <option disabled>Choose Price</option>
          </select>
          <button onClick={this.filter}>Filter</button>
        </div>
        <div className="laptops">{display}</div>
        <div className="compare">
          <h3>Compare</h3>
          <div>
            {this.props.compare.map(compare => {
              return <Compare compare={compare} />;
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
