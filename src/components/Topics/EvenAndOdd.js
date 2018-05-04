import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    updateUserInput( input ) {
        this.setState({
            userInput: input
        })
    } // = = = = = = end updateUserInput = = = = = = =

    splitNumbers( numStr ) {
        let numsArr = numStr.split(",");
        let evens = [];
        let odds = [];

        for ( let i = 0; i < numsArr.length; i++ ) {
            numsArr[i] = Number( numsArr[i] );

            if ( numsArr[i] % 2 === 0 ) {
                evens.push( numsArr[i] );
            } else {
                odds.push( numsArr[i] );
            }
        }

        this.setState({
            evenArray: evens,
            oddArray: odds
        });

    } //  = = = = = = end splitNumbers = = = = = = =

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input type="text" className="inputLine" onChange={ (e) => this.updateUserInput(e.target.value) } />
                <button className="confirmationButton" onClick={ () => this.splitNumbers(this.state.userInput) } >Submit</button>
                <span className="resultsBox">Evens: [{ this.state.evenArray.join(', ') }]</span>
                <span className="resultsBox">Odds: [{ this.state.oddArray.join(', ') }]</span>
            </div>
        );
    } // end render
}

export default EvenAndOdd;