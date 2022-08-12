import React, { Component } from 'react';


class NumberOfEvents extends Component {

  handleInputChange = (event) => {
    const value = event.target.value;
    this.props.updateEvents(undefined,value);
  }

  render() {
    const {eventsCount}=this.props
    return (
        <form>
          <label htmlFor="fname">Number of events:</label><br></br>
          <input
          type="number"
          className='numberOfEvents'
          value={eventsCount}
          onChange={this.handleInputChange}
          />
        </form>
    );
  }
}

export default NumberOfEvents;
  