import React, { Component } from "react";

class MyNewComponent extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>
                    {this.props.lastName}, {this.props.firstName}
                </h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.hairColor} </p>
            </React.Fragment>
        );
    }
}

export default MyNewComponent;
