import React, { Component } from 'react';


class NumberOfEvents extends Component {
  
  handleOnChange = (event) => {
    const value = event.target.value;
    this.props.updateEvents(undefined,value);
  }

  render() {
    const {eventsNum}=this.props
    return (
        <form>
          <label htmlFor="fname">Number of events:</label><br></br>
          <input
          type="number"
          className='numberOfEvents'
          value={eventsNum}
          onChange={this.handleOnChange}
          />
        </form>
    );
  }
}

export default NumberOfEvents;
  