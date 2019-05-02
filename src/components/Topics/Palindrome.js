import React, { Component } from 'react';

export default class Palindrome extends Component {

  constructor() {
    super()
    this.state = {
      userInput: '',
      palindrom: ''
    }
  }

  handleChange(val) {
    this.setState({userInput: val})
  }

  palindromFunc(userInput) {
    let palindrom = userInput.split('').reverse().join('')
    this.setState({palindrom: palindrom })
  }


  render() {
    return (
      <div className="puzzleBox filterStringPB">
          <h4>Palindrome</h4>
          <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
          <button className="confirmationButton" onClick={() => this.palindromFunc(this.state.userInput)}>Do Work!</button>
          <span className="resultsBox">Palindrom: { JSON.stringify(this.state.palindrom,null,10) }</span>
      
      </div>
    ) 
  }
}