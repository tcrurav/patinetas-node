import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

    constructor(props) {
        super(props);
        this.state = { bicycles: [] };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/bicycles')
            .then(response => {
                this.setState({ bicycles: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    tabRow() {
        return this.state.bicycles.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3 align="center">Bicycle List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        );
    }
}