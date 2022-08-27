import React, { Component } from 'react';
import '../App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventGenre from './EventGenre';
import { extractLocations,getEvents } from '../api';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip,ResponsiveContainer
} from 'recharts';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
        events: [],
        locations:[],
        selectedCity:'',
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

    //get value of query state in CitySearch component
     getQueryState=(suggestion)=>{
      this.setState({selectedCity:suggestion});
    }
    
    //update events based on selected events
    updateEvents = (location,eventCount) => {
      if(eventCount===undefined){
        eventCount=this.state.eventsCount
      }else{
        this.setState({eventsCount:eventCount})
      }
      if(location==='city'){
        location=this.state.selectedCity
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

    getData = () => {
      const {locations, events} = this.state;
      const data = locations.map((location)=>{
        const number = events.filter((event) => event.location === location).length
        const city = location.split(', ').shift()
        return {city, number};
      })
      return data;
    };

    componentWillUnmount(){
      this.mounted = false;
    }
    
  render() {
    return (
      <div className="App">
        <CitySearch 
        locations={this.state.locations}
        getQueryState={this.getQueryState}
        updateEvents={this.updateEvents}
        />
        <NumberOfEvents 
        eventsCount={this.state.eventsCount}
        updateEvents={this.updateEvents}
        />
        <div className='data-vis-wrapper' >
          <EventGenre events={this.state.events}/>
          <ResponsiveContainer height={400} >
            <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="category" dataKey="city" name="city"/>
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;


/* when i type in b and select berlin then reduce the number to 1, the event changes to london
when i delete the value in input the suggestions are still visible.
*/  	