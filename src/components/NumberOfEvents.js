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
    if(value<=0 || value>40){
       this.setState({
        showAlert:true,
        infoText:'number must be between 1 and 40' 
      });
       this.props.updateEvents('city',value);
    }else{
      this.setState({
        showAlert:false,
        infoText:''
      })
      this.props.updateEvents('city',value);
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
  