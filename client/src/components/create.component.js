import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';

export default class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeId = this.onChangeId.bind(this);
        this.onChangeBrand = this.onChangeBrand.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            id: '',
            brand: '',
            model: ''
        }
    }
    onChangeId(e) {
        this.setState({
            id: e.target.value
        });
    }
    onChangeBrand(e) {
        this.setState({
            brand: e.target.value
        })
    }
    onChangeModel(e) {
        this.setState({
            model: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            id: this.state.id,
            brand: this.state.brand,
            model: this.state.model
        };
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        axios.post('http://localhost:4000/bicycle', qs.stringify(obj), config)
            .then(res => console.log(res.data));

        this.setState({
            id: '',
            brand: '',
            model: ''
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add New Bicycle</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Bicycle Id:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.id}
                            onChange={this.onChangeId}
                        />
                    </div>
                    <div className="form-group">
                        <label>Brand: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.brand}
                            onChange={this.onChangeBrand}
                        />
                    </div>
                    <div className="form-group">
                        <label>Model: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.model}
                            onChange={this.onChangeModel}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Bicycle" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}