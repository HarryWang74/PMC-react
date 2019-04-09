import React from 'react';
import { Link, Redirect } from "react-router-dom";

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
        this.onAddTag = this.onAddTag.bind(this);
    }

    componentDidMount() {
        // load data 
        if(this.props.match.params.id > 0){
            this.loadData();
        }

        // init product 
        if(Number(this.props.match.params.id)===0){
            this.setState({
                isLoading: false,
                productDetail: {
                    "id": null,
                    "productName": "",
                    "productCode": "",
                    "releaseDate": "",
                    "description": "",
                    "price": 0,
                    "starRating": 0,
                    "imageUrl": "",
                    "tags": []
                }
            });
        }
    }
    
    loadData(){
        fetch("http://localhost:3004/products/" + this.props.match.params.id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    this.setState({
                        isLoading: false,
                        productDetail: data
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
    }

    save(event){
        event.preventDefault();
        if(this.props.match.params.id > 0){
            fetch("http://localhost:3004/products/" + this.props.match.params.id, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify(this.state.productDetail)
            }).then(
                (data) => {
                    console.log(data);
                    this.props.history.push(`/`)
                },
                (error) => {
                    this.setState({
                    isLoading: false,
                    error,
                    });
                }
            )
        }else{
            fetch("http://localhost:3004/products/", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    // "Content-Type": "application/x-www-form-urlencoded",
                },
                body: JSON.stringify(this.state.productDetail)
            }).then(
                (data) => {
                    console.log(data);
                    this.props.history.push(`/`)
                },
                (error) => {
                    this.setState({
                    isLoading: false,
                    error,
                    });
                }
            )
        }
        
    }

    onProductImageChange(event){
        let newData =  Object.assign({}, this.state.productDetail);
        newData.imageUrl = event.target.value;
        this.setState({productDetail:newData});
    }

    onProductNameChange(event){
        let newData =  Object.assign({}, this.state.productDetail);
        newData.productName = event.target.value;
        this.setState({productDetail:newData});
    }

    onProductCodeChange(event){
        let newData =  Object.assign({}, this.state.productDetail);
        newData.productCode = event.target.value;
        this.setState({productDetail:newData});
    }

    onReleaseDateChange(event){
        let newData =  Object.assign({}, this.state.productDetail);
        newData.releaseDate = event.target.value;
        this.setState({productDetail:newData});
    }

    onPriceChange(event){
        let newData =  Object.assign({}, this.state.productDetail);
        newData.price = event.target.value;
        this.setState({productDetail:newData});
    }

    onRatingChange(event){
        let newData =  Object.assign({}, this.state.productDetail);
        newData.starRating = event.target.value;
        this.setState({productDetail:newData});
    }

    onDescriptionChange(event){
        let newData =  Object.assign({}, this.state.productDetail);
        newData.description = event.target.value;
        this.setState({productDetail:newData});
    }

    onTagChange(index, event){
        let newData =  Object.assign({}, this.state.productDetail);
        newData.tags[index] = event.target.value;
        this.setState({productDetail:newData});
    }

    onAddTag(event){
        let newData =  Object.assign({}, this.state.productDetail);
        newData.tags.push("");
        this.setState({productDetail:newData});
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
                        <h1 className="col-md-12">{this.props.match.params.id > 0 ? 'Edit product' : 'Create product'}</h1>
                    </div>

                    <form className="form-horizontal" onSubmit={this.save}>
                        <fieldset>
                            <div className="form-group" >
                                <label className="control-label">Product Image</label>
                                    <input className="form-control" 
                                            id="imageUrl"
                                            value={this.state.productDetail.imageUrl} 
                                            onChange={this.onProductImageChange} 
                                            type="text" 
                                            placeholder="Image url"  />
                            </div>

                            <div className="form-group" >
                                <label className="control-label">Product Name</label>
                                <input className="form-control"
                                        id='productName' 
                                        type="text"
                                        value={this.state.productDetail.productName} 
                                        onChange={this.onProductNameChange} 
                                        placeholder="Name (required)" />
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label className="control-label">Product Code</label>
                                    <input className="form-control" 
                                            id="productCodeId"
                                            value={this.state.productDetail.productCode} 
                                            onChange={this.onProductCodeChange}  
                                            type="text" 
                                            placeholder="Code (required)" />
                                </div>

                                <div className="col-md-6">
                                    <label className="control-label">Available</label>
                                    <input className="form-control" 
                                            id="dateId" 
                                            type="date"
                                            value={this.state.productDetail.releaseDate} 
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
                                            value={this.state.productDetail.price} 
                                            onChange={this.onDescriptionChange}  
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
                                            value={this.state.productDetail.starRating} 
                                            onChange={this.onRatingChange}  
                                            placeholder="Rating" />
                                </div>
                            </div>
                        
                            <div className="form-group">
                                <label className="control-label">Description</label>
                                <textarea className="form-control" 
                                        id="descriptionId" 
                                        placeholder="Description"
                                        value={this.state.productDetail.description} 
                                        onChange={this.onDescriptionChange}  
                                        rows="3"></textarea>
                            </div>

                            <div>
                                <label className="control-label">Tags</label>
                                <div className="form-group row" >
                                { 
                                    this.state.productDetail.tags.map(
                                        (tag, index)=>
                                            <div className="col-md-3 mb-3" key={index}>
                                                <input className="form-control"
                                                        type="text"
                                                        value={tag}
                                                        onChange={(evt) => this.onTagChange(index, evt)}
                                                        placeholder="Tag" />
                                            </div>
                                    )
                                }
                                </div>
                            </div>

                            <div className="text-right">
                                <button className="btn btn-primary btn-sm"
                                        onClick={this.onAddTag}
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