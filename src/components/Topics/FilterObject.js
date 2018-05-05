import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            unFilteredArray: [
                { username: 'johndoe12', password: 'qwertyuiop', priority: 100 },
                { username: 'pennyLane', password: 'keepitsecret', membership: 'Premium' },
                { username: 'nicole5000', password: 'elvis-lives!', hasAccess: false },
                { username: 'danTheMan', password: '*#&@zpmn', isVIP: true },
            ],
            userInput: '',
            filteredArray: []
        }
    }

    updateUserInput( input ) {
        this.setState({ userInput: input });
    }

    filterObjects( arr, searchedProperty ) {
        let newArr = arr.filter( user => user[searchedProperty] !== undefined );

        this.setState({ filteredArray: newArr });
    }

    turnObjectToStr( arr ) {
        var objStr = '';

        for ( let i = 0; i < arr.length; i++ ) {
            objStr += '{';
            for ( let key in arr[i] ) {
                objStr += key + ': ' + arr[i][key];
            }
            objStr += '},';
        }

        return objStr;
    }

    render() {
        
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">UnFiltered: [{ this.turnObjectToStr(this.state.unFilteredArray) }]</span>
                <input type="text" className="inputLine" onChange={ e => this.updateUserInput(e.target.value) } />
                <button className="confirmationButton" 
                    onClick={ () => this.filterObjects(this.state.unFilteredArray, this.state.userInput) } >
                    Filter
                </button>
                <span className="resultsBox filterObjectRB">Filtered: [{ this.turnObjectToStr(this.state.filteredArray) }]</span>
            </div>
        );
    }
}

export default FilterObject;