import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      //holds events and changed with suggested location 
     events:[] ,
     //holds locations of events
     locations: [],
     eventsNum:20
    }
  }

  //load eveents and locations
  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ 
          events:events.slice(0,this.state.eventsNum),
          locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  //update events based on selected events
  updateEvents = (location,eventCount) => {
    if(eventCount===undefined){
      eventCount=this.state.eventsNum
    }else{
      this.setState({eventsNum:eventCount})
    }
    getEvents().then((events) => {
      const locationEvents = (location === 'all' || location === undefined) ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0,this.state.eventsNum)
      });
    });
  }

 render(){return (
  <div className="App">
    <CitySearch 
    locations={this.state.locations}
    updateEvents={this.updateEvents}/>
    <NumberOfEvents 
    eventsNum={this.state.eventsNum}
    updateEvents={this.updateEvents}
    />
    <EventList events={this.state.events} />
  </div>
);} 
}

export default App;


/* when i type in b and select berlin then reduce the number to 1, the event changes to london
when i delete the value in input the suggestions are still visible.
*/  	