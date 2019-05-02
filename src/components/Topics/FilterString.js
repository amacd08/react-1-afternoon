import React, { Component } from 'react';

export default class FilterString extends Component {
  constructor() {
    super()
    this.state = {
        unFilteredArray: ['Andrew','Stephanie','Henry','Walter', 'Holland', 'Adelaide'],
        userInput: '',
        filteredArray: []
    }
  }
  handleChange(val) {
    this.setState({ userInput: val})
  }

  filterTheArray(userInput) {
    let list = this.state.unFilteredArray
    let filteredList =list.filter(elem => elem.includes(userInput))
    this.setState({ filteredArray: filteredList})
    
  }
  render() {
    return (
      <div className="puzzleBox filterStringPB">
          <h4>"Filter String"</h4>
          <span className="puzzleText">Unfiltered List: { JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
          <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
          <button className="confirmationButton" onClick={() => this.filterTheArray(this.state.userInput)}>Filter</button> 
          <span className="resultsBox FilterStringRB">Filtered List: { JSON.stringify(this.state.filteredArray,null, 10) }</span>
      </div>
    )
  }
}