import React, { Component } from 'react';
import moment from 'moment';
import '../styles/events.css';


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
        <div className='event'>
          <h2 className='eventTitle' >{events.summary}</h2>
          <p className='eventTimeCity'>{moment(events.start.dateTime).format('LLLL') + ' ' + events.start.timeZone + ' time zone'}</p>
          <p>{`@${events.summary}|${events.location}`}</p>
          {!this.state.showDetails? <button className='expandDetailsBtn' onClick={()=>this.setState({showDetails:true})}>Show details</button>:<div></div>}
          {this.state.showDetails?
          <div>
            <h3>About event:</h3>
            <a
              href={events.htmlLink}
              target="_blank" rel="noreferrer"
            >
                See details on Google calendar
            </a>
            <div className='eventDetails'>{events.description}</div>
            <button className='collapseDetailsBtn' onClick={()=>this.setState({showDetails:false})}>Hide details</button>
          </div>
          :<p></p>  
        }
        </div>
    );
  }
}

export default Event;