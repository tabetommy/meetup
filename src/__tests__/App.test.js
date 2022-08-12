import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
import EventList from '../components/EventList';
import CitySearch from '../components/CitySearch';
import NumberOfEvents from '../components/NumberOfEvents';
import  mockData  from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
    let AppWrapper
    beforeAll(()=>AppWrapper=shallow(<App />))

    test('render <EventList />', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
      });

    test('render <CitySearch />', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test('render <NumberOfEvents />', () => {
      expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
      });
});


describe('<App /> integration', () => {

  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });
  
  test('App passes "eventsCount" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('eventsCount');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(NumberOfEvents).props().eventsCount).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  test('get list of events matching number and name of city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    NumberOfEventsWrapper.find('.numberOfEvents').simulate('change',{target: { value: 2 }})
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity).slice(0,2);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "See all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });
 
});