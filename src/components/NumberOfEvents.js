import React, { Component } from 'react';
import {ErrorAlert} from '../Alert'


class NumberOfEvents extends Component {

  constructor(){
    super();
    this.state={
      infoText:'',
      showAlert:false
    }
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    // this.props.updateEvents(undefined,value);
    if(value<=0 || value>40){
       this.setState({
        showAlert:true,
        infoText:'number must be positive and not more than 40' 
      });
       this.props.updateEvents(undefined,value);
    }else{
      this.setState({
        showAlert:false,
        infoText:''
      })
      this.props.updateEvents(undefined,value);
    }
    
  }

  render() {
    const {eventsCount}=this.props
    return (
        <form>
          <div style={{visibility:this.state.showAlert?'visible':'hidden'}} >
            <ErrorAlert text={this.state.infoText}/>
          </div>
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
  