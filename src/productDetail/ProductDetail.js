import React from 'react';

class ProductDetails extends React.Component{
  render(){
    return (
      <div>
        <h1>Details {this.props.match.params.id}</h1>
      </div>
    );
  }
}

export default ProductDetails;