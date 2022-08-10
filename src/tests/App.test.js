import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents} from '../api';

describe('<App /> component', ()=>{
    let AppWrapper,events
    beforeAll(()=>AppWrapper=shallow(<App events={events}/>))
    test('render list of events',()=>{
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });
    test('render cities',()=>{
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);

    });

    test('render the number of events',()=>{
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    })
});

describe('<App /> integration', () => {
  let AppWrapper;
  beforeAll(()=>AppWrapper=mount(<App />))
    test('App passes "events" state as a prop to EventList', () => {
      const AppEventsState = AppWrapper.state('events');
      // expect(AppEventsState).not.toEqual(undefined);
      expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
      AppWrapper.unmount();
    });

    test('App passes "locations" state as a prop to CitySearch', () => {
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
      });

    test('App passes "eventsNum" state as a prop to NumberOfEvents', () => {
      const AppEventsNumState = AppWrapper.state('eventsNum');
      expect(AppEventsNumState).not.toEqual(undefined);
      expect(AppWrapper.find(NumberOfEvents).props().eventsNum).toEqual(AppEventsNumState);
      AppWrapper.unmount();
  });
    

    test('get list of events matching the city selected by the user', async () => {
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    AppWrapper.setState({eventsNum:3});
    const eventsToShow = allEvents.filter(event => event.location === selectedCity).slice(0,AppWrapper.state('eventsNum'));
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
    });

    test('get list of all events when user selects "See all cities"', async () => {
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount();
      });
  });