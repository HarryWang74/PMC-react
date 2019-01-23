import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import ProductList  from './productList/ProductList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: true,
      data: {
        productList:[]
      }
    };
  }

  componentDidMount() {
    setTimeout(()=>{
      fetch("/api/productList.json")
      .then(res => res.json())
      .then(
        (data) => {
          this.setState({
            isLoading: false,
            data: {
              productList: data
            }
          });
          console.log(this.state);
        },
        (error) => {
          this.setState({
            isLoading: false,
            error,
          });
        }
      )
    }, 3000)
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (this.state.isLoading) {
      return (
        <div className="container">
          <h2>Loading ... </h2>
        </div>
      )
    } else {
      return (
        <div className="container">
          <Router>
            <Route exact path="/" render={(props) => <ProductList {...props} productList={this.state.data.productList} />} />
          </Router>
        </div>
      );
    }
  }
}

export default App;
