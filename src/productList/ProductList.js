import React from 'react';

class ProductList extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
        <div>
            <div class="row mb-3 mt-3">
                <h1>Product list</h1>
            </div>

            <div class="row mb-3 form-group">    
                <div class="col-md-4">
                    <input class="form-control" type="text" placeholder="Search" />
                </div>
            </div>

            <div class="row border-bottom pb-2">
                <div class="col-md-2">Image</div>
                <div class="col-md-2">Product name</div>
                <div class="col-md-1">code</div>
                <div class="col-md-1">Available</div>
                <div class="col-md-1">Price</div>
                <div class="col-md-2">Rating</div>
                <div class="col-md-3"></div>
            </div>

            <div class="row border-bottom pb-2 pt-2">
                <div class="col-md-2"><img class="img-fluid" src="http://via.placeholder.com/800x500" /></div>
                <div class="col-md-2">productName</div>
                <div class="col-md-1">productCode</div>
                <div class="col-md-1">releaseDate</div>
                <div class="col-md-1">price</div>
                <div class="col-md-2">starRating</div>
                <div class="col-md-3 text-right">
                    <button type="button" class="btn btn-primary btn-sm mr-1">View</button>
                    <button type="button" class="btn btn-primary btn-sm mr-1">Edit</button>
                    <button type="button" class="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>

            <div class="row pt-4">
                <div class="col-md-12 text-right">
                    <button type="button" class="btn btn-primary">Add product</button>
                </div>
            </div>      
        </div>
    );
  }
}

export default ProductList;