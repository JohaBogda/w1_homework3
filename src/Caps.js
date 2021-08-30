import React, { Component } from 'react';

class Caps extends Component {
    render() {
        return (
            <div onClick = {this.changeIt}>
                {this.props.tardis}
            </div>
        );
    }
}

export default Caps;