import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        };
    }

    updateNum1( input ) {
        this.setState({ number1: Number(input) });
    }
    
    updateNum2( input ) {
        this.setState({ number2: Number(input) });
    }

    handleClick( num1, num2 ) {
        this.setState({ sum: num1 + num2 });
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input type="text" className="inputLine" onChange={ e => this.updateNum1(e.target.value) }/>
                <input type="text" className="inputLine" onChange={ e => this.updateNum2(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.handleClick(this.state.number1, this.state.number2) }>Add</button>
                <span className="resultsBox">{ this.state.sum }</span>
            </div>
        );
    }
}

export default Sum;