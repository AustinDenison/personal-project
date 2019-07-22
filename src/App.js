import React, { Component } from "react";
import "./App.css";
import Header from './Components/header'
import routes from './routes'
import Login from './Components/login'
import Search from './Components/search'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {routes}
      </div>
    )
  }
}

export default App;
