import React, { Component } from 'react';
import moment from 'moment';


class Event extends Component {
     constructor() {
          super();
          
          this.state = {
               showDetails:false
          }
          }
  
  render() {
     const {events}=this.props
    
    return (
        <div>
          <h1 className='eventTitle' >{events.summary}</h1>
          <p className='eventTimeCity'>{moment(events.start.dateTime).format('LLLL') + events.start.timeZone}</p>
          <p>{`@${events.summary}|${events.location}`}</p>
          {!this.state.showDetails? <button className='expandDetailsBtn' onClick={()=>this.setState({showDetails:true})}>Show details</button>:<div></div>}
          {this.state.showDetails?
          <div>
          <p>{events.description}</p>
          <button className='collapseDetailsBtn' onClick={()=>this.setState({showDetails:false})}>Hide details</button>
          </div>
          :<p></p>  
        }
        </div>
    );
  }
}

export default Event;