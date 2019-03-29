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
        this.onProductNameChange = this.onProductNameChange.bind(this);
        this.onProductCodeChange = this.onProductCodeChange.bind(this);
        this.onReleaseDateChange = this.onReleaseDateChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onRatingChange = this.onRatingChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
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

    onProductNameChange(event){
        let newData =  Object.assign({}, this.state.data);
        newData.productDetail.productName = event.target.value;
        this.setState({data:newData});
    }

    onProductCodeChange(event){
        let newData =  Object.assign({}, this.state.data);
        newData.productDetail.productCode = event.target.value;
        this.setState({data:newData});
    }

    onReleaseDateChange(event){
        let newData =  Object.assign({}, this.state.data);
        newData.productDetail.releaseDate = event.target.value;
        this.setState({data:newData});
    }

    onPriceChange(event){
        let newData =  Object.assign({}, this.state.data);
        newData.productDetail.price = event.target.value;
        this.setState({data:newData});
    }

    onRatingChange(event){
        let newData =  Object.assign({}, this.state.data);
        newData.productDetail.starRating = event.target.value;
        this.setState({data:newData});
    }

    onDescriptionChange(event){
        let newData =  Object.assign({}, this.state.data);
        newData.productDetail.description = event.target.value;
        this.setState({data:newData});
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
                                        value={this.state.data.productDetail.productName} 
                                        onChange={this.onProductNameChange} 
                                        placeholder="Name (required)" />
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label className="control-label">Product Code</label>
                                    <input className="form-control" 
                                            id="productCodeId"
                                            value={this.state.data.productDetail.productCode} 
                                            onChange={this.onProductCodeChange}  
                                            type="text" 
                                            placeholder="Code (required)" />
                                </div>

                                <div className="col-md-6">
                                    <label className="control-label">Available</label>
                                    <input className="form-control" 
                                            id="dateId" 
                                            type="date"
                                            value={this.state.data.productDetail.releaseDate} 
                                            onChange={this.onReleaseDateChange}  
                                            placeholder="Available" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label className="control-label">Price</label>
                                    <input className="form-control"
                                            id="priceId" 
                                            type="number"
                                            value={this.state.data.productDetail.price} 
                                            onChange={this.onPriceChange}  
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
                                            value={this.state.data.productDetail.starRating} 
                                            onChange={this.onRatingChange}  
                                            placeholder="Rating" />
                                </div>
                            </div>
                        
                            <div className="form-group">
                                <label className="control-label">Description</label>
                                <textarea className="form-control" 
                                        id="descriptionId" 
                                        placeholder="Description"
                                        value={this.state.data.productDetail.description} 
                                        onChange={this.onDescriptionChange}  
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