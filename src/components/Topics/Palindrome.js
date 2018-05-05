import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        };
    }

    updateUserInput( input ) {
        this.setState({ userInput: input})
    }

    checkPalindrome( str ) {
        var revStr = str.split('');
        revStr = revStr.reverse();
        revStr = revStr.join('');

        if ( str === revStr ) {
            this.setState({ palindrome: 'true' });
        } else {
            this.setState({ palindrome: 'false' });
        }
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input
                    type="text"
                    className="inputLine"
                    onChange={ e => this.updateUserInput(e.target.value) }
                />
                <button 
                    className="confirmationButton"
                    onClick={ () => this.checkPalindrome( this.state.userInput ) }>
                    Check
                </button>
                <span className="resultsBox">Palindrome: { this.state.palindrome }</span>
            </div> 
        );
    }
}

export default Palindrome;