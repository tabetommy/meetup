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
      this.setState({infoText:'The events are not up to date because you are offline. Go online to get updated events'})
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