import React from 'react';

class ProductList extends React.Component{
  constructor(props) {
    super(props);
    console.log(this.props.productList)
  }
  render(){
    return (
        <div>
            <div className="row mb-3 mt-3">
                <h1>Product list</h1>
            </div>

            <div className="row mb-3 form-group">    
                <div className="col-md-4">
                    <input className="form-control" type="text" placeholder="Search" />
                </div>
            </div>

            <div className="row border-bottom pb-2">
                <div className="col-md-2">Image</div>
                <div className="col-md-2">Product name</div>
                <div className="col-md-1">code</div>
                <div className="col-md-1">Available</div>
                <div className="col-md-1">Price</div>
                <div className="col-md-2">Rating</div>
                <div className="col-md-3"></div>
            </div>

            {
                this.props.productList.map(
                    (product)=>
                    <div key={product.id} className="row border-bottom pb-2 pt-2">
                        <div className="col-md-2"><img className="img-fluid" src={product.imageUrl} /></div>
                        <div className="col-md-2">{product.productName}</div>
                        <div className="col-md-1">{product.productCode}</div>
                        <div className="col-md-1">{product.releaseDate}</div>
                        <div className="col-md-1">{product.price}</div>
                        <div className="col-md-2">{product.starRating}</div>
                        <div className="col-md-3 text-right">
                            <button type="button" className="btn btn-primary btn-sm mr-1">View</button>
                            <button type="button" className="btn btn-primary btn-sm mr-1">Edit</button>
                            <button type="button" className="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </div>
                )
            }

            <div className="row pt-4">
                <div className="col-md-12 text-right">
                    <button type="button" className="btn btn-primary">Add product</button>
                </div>
            </div>      
        </div>
    );
  }
}

export default ProductList;