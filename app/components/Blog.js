import React from 'react';
import {connect} from 'react-redux';
import Messages from './Messages';

class Blogs extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
fetch("https://medium.com/@elavely/latest?format=json").then((data) => {
            console.log("Checking Data: ",data)
        })
    }

    render() {
        return (
            <div>
                <h1>
                    Blogs!
                </h1>
            </div>
        )
    }
}

export default Blogs