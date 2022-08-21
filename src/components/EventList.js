import React, { Component } from 'react';
import Event from './Event';
import {WarningAlert} from '../Alert'

class EventList extends Component {
  constructor(){
    super();
    this.state={
      infoText:'',
    }
  }

  componentDidMount(){
    if(!navigator.onLine){
      this.setState({infoText:'The App is currently offline; the events are being loaded from cache,hence they are not up to date'})
    }else{
      this.setState({infoText:''})
    }
  }

  render() {
    const { events } = this.props;
    return (
      <div>
        <WarningAlert text={this.state.infoText}/>
        <ul className="EventList">
             {events.map(event =>
            <li key={event.id}>
            <Event events={event} />
            </li>
            )}
        </ul>
      </div>
    );
  }
}

export default EventList