import React, { Component } from "react";
import "./App.css";
import Header from './Components/header'
import routes from './routes'
<<<<<<< HEAD
import Login from './Components/login'
import Search from './Components/search'
=======

>>>>>>> 83a29f28b0cad2164bb26e8f9d2c40f2b9fd4685

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
