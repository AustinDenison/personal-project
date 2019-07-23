import React, { Component } from "react";
import "./search.css";
import axios from "axios";
import Laptop from "./laptop";
import { connect } from 'react-redux';
import {setLaptops} from '../redux/userReducer'

class Search extends Component {
  constructor() {
    super();

    this.state = {
      queries: [],
      brand: "null",
      display: "null",
      processor: "null",
      videoCard: "null",
      memory: "null",
      storage: "null",
      price: 0
    };
  }

  componentDidMount() {
    axios.get(`/api/laptops`).then(res => {
      this.props.setLaptops(res.data)
    });
  }

  filter = () => {
      let queryString = '?'
      console.log('hit comp')
      for(let key in this.state){
          queryString += `&${key}=${this.state[key]}`
      }
      console.log(queryString)
      axios.get(`/api/laptops/${queryString}`).then(res => {
          this.setState({
              queries: res.data
          })
      })
  }

  handleBrand = value => {
    this.setState({
      brand: [...this.state, value]
    });
  };

  handleQuery = value => {
    this.setState({
      queries: [...this.state.queries, { value }]
    });
  };
  render() {
    return (
      <div className="search-container">
        <div className="search">
          <p>Brand</p>
          <select>
            <option onClick={() => this.handleBrand("HP")}>HP</option>
            <option onClick={() => this.handleBrand("Asus")}>Asus</option>
            <option onClick={() => this.handleBrand("Dell")}>Dell</option>
            <option onClick={() => this.handleBrand("Alienware")}>Alienware</option>
            <option onClick={() => this.handleBrand("Lenovo")}>Lenovo</option>
            <option onClick={() => this.handleBrand("Razer")}>Razer</option>
            <option onClick={() => this.handleBrand("Acer")}>Acer</option>
            <option onClick={() => this.handleBrand("Microsoft")}>Microsoft</option>
            <option onClick={() => this.handleBrand("Huawei")}>Huawei</option>
            <option onClick={() => this.handleBrand("Apple")}>Apple</option>
          </select>
          <p>Display</p>
          <select>
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
        <div className='laptops'>
                    {this.props.laptops.map(laptop => {
                        return <Laptop laptop={laptop} key={laptop.laptop_id} />
                    })}
                </div>
        <div className="compare" />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return state.user
}

export default connect(mapStateToProps, {setLaptops})(Search);
