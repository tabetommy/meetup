import React, { Component } from 'react';
import '../App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations,getEvents } from '../api';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
        events: [],
        locations:[],
        eventsCount:25
        
    }
    }

    componentDidMount() {
      this.mounted = true;
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ 
            events:events.slice(0,this.state.eventsCount), 
            locations: extractLocations(events) });
        }
      });
    }

    //update events based on selected events
    updateEvents = (location,eventCount) => {
      if(eventCount===undefined){
        eventCount=this.state.eventsCount
      }else{
        this.setState({eventsCount:eventCount})
      }
      getEvents().then((events) => {
        const locationEvents = (location === 'all' || location === undefined) ?
          events :
          events.filter((event) => event.location === location);
        this.setState({
          events: locationEvents.slice(0,this.state.eventsCount)
        });
      });
    }

    componentWillUnmount(){
      this.mounted = false;
    }
    
  render() {
    return (
      <div className="App">
        <CitySearch 
        locations={this.state.locations}
        updateEvents={this.updateEvents}
        />
        <NumberOfEvents 
        eventsCount={this.state.eventsCount}
        updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;


/* when i type in b and select berlin then reduce the number to 1, the event changes to london
when i delete the value in input the suggestions are still visible.
*/  	