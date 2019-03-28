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
                        <h1>{this.state.data.productDetail.productName}</h1>
                    </div>

                    <div className="row pt-4">
                        <div className="col-md-12 text-right">
                            <Link className="btn btn-primary btn-sm mr-1" to={`/`}>Back to list</Link>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default ProductEdit;