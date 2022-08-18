import React, { Component } from 'react';
import {ErrorAlert} from '../Alert'


class NumberOfEvents extends Component {

  constructor(){
    super();
    this.state={
      infoText:'',
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    // this.props.updateEvents(undefined,value);
    if(value<=0 || value>40){
       this.setState({infoText:'number of events must be positive and not more than 40'});
       this.props.updateEvents(undefined,value);
    }else{
      this.setState({infoText:''})
      this.props.updateEvents(undefined,value);
    }
    
  }

  render() {
    const {eventsCount}=this.props
    return (
        <form>
          <ErrorAlert text={this.state.infoText}/>
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
  