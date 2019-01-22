import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import ProductList  from './productList/ProductList';

class App extends Component {
  render() {
    return (
      <div class="container">
        <Router>
          <Route exact path="/" component={ProductList} />
        </Router>
      </div>
    );
  }
}

export default App;
