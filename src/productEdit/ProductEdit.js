import React from 'react';
import { Link } from "react-router-dom";

class ProductEdit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoading: true,
            data: {
              productDetail:{}
            }
        };

        this.save = this.save.bind(this);
        this.onProductImageChange = this.onProductImageChange.bind(this);
    }

    componentDidMount() {
        setTimeout(()=>{
            fetch("/api/" + this.props.match.params.id + ".json")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoading: false,
                        data: {
                            productDetail: data
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
        }, 1000)
    }
    
    save(event){
        console.log(this.state);
        event.preventDefault()
    }

    onProductImageChange(event){
        let newData =  Object.assign({}, this.state.data);
        newData.productDetail.imageUrl = event.target.value;
        this.setState({data:newData});
    }

    onProductNameChange(){

    }

    render(){
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
                <div>
                    <div className="row mb-3 mt-3">
                        <h1 className="col-md-12">Edit product</h1>
                    </div>

                    <form className="form-horizontal" onSubmit={this.save}>
                        <fieldset>
                            <div className="form-group" >
                                <label className="control-label">Product Image</label>
                                    <input className="form-control" 
                                            id="imageUrl"
                                            value={this.state.data.productDetail.imageUrl} 
                                            onChange={this.onProductImageChange} 
                                            type="text" 
                                            placeholder="Image url"  />
                            </div>

                            <div className="form-group" >
                                <label className="control-label">Product Name</label>
                                <input className="form-control"
                                        id='productName' 
                                        type="text"
                                        placeholder="Name (required)" />
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label className="control-label">Product Code</label>
                                    <input className="form-control" 
                                            id="productCodeId" 
                                            type="text" 
                                            placeholder="Code (required)" />
                                </div>

                                <div className="col-md-6">
                                    <label className="control-label">Available</label>
                                    <input className="form-control" 
                                            id="dateId" 
                                            type="date"
                                            placeholder="Available" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label className="control-label">Price</label>
                                    <input className="form-control"
                                            id="priceId" 
                                            type="number"
                                            placeholder="Price" />
                                </div>

                                <div className="col-md-6">
                                    <label className="control-label">Rating (1-5)</label>
                                    <input className="form-control"
                                            id="starRatingId" 
                                            type="number"
                                            min="1" 
                                            max="5"
                                            step="1" 
                                            placeholder="Rating" />
                                </div>
                            </div>
                        
                            <div className="form-group">
                                <label className="control-label">Description</label>
                                <textarea className="form-control" 
                                        id="descriptionId" 
                                        placeholder="Description"
                                        rows="3"></textarea>
                            </div>

                            <div>
                                <label className="control-label">Tags</label>
                                <div className="form-group row">
                                    <div className="col-md-3">
                                        <input className="form-control"
                                                type="text"
                                                placeholder="Tag" />
                                    </div>
                                </div>
                            </div>

                            <div className="text-right">
                                <button className="btn btn-primary btn-sm"
                                        type="button">Add Tag
                                </button>
                            </div>
                            <hr />
                            <div className="pt-4 text-right">
                                <Link className="btn btn-danger mr-3" to={`/`}>Cancel</Link>
                                <input type="submit" className="btn btn-primary" value="Save" />
                            </div>
                        </fieldset>
                    </form>
             
                </div>
            );
        }
    }
}

export default ProductEdit;