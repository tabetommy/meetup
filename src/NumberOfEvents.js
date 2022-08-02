import React, { Component } from 'react';


class NumberOfEvents extends Component {
  constructor() {
    super();
 
    this.state = {
      numOfEvents: 32
    }
  }
  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numOfEvents: value });
  }
  render() {
    return (
        <div>
          <input
          type="number"
          className='number'
          value={this.state.numOfEvents}
          onChange={this.handleInputChanged}
          />
        </div>
    );
  }
}

export default NumberOfEvents;
  