import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ['Scrubs', 'The Big Bang Theory', 'How I Met Your Mother', 'Life in Pieces'],
            userInput: '',
            filteredArray: []
        };
    }

    updateUserInfo( input ) {
        this.setState({ userInput: input });
    }

    handleClick( arr, searchedStr ) {
        let newArr = arr.filter( str => str.includes(searchedStr) );

        this.setState({ filteredArray: newArr });
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered: [{ this.state.unFilteredArray.join(', ') }]</span>
                <input 
                    type="text" 
                    className="inputLine"
                    onChange={ e => this.updateUserInfo(e.target.value)} 
                />
                <button 
                    className="confirmationButton"
                    onClick={ () => this.handleClick(this.state.unFilteredArray, this.state.userInput) }>
                    Filter
                </button>
                <span className="resultsBox filterStringRB">Filtered: [{ this.state.filteredArray.join(', ') }]</span>
            </div>
        );
    }
}

export default FilterString; 