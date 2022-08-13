import { loadFeature, defineFeature } from 'jest-cucumber';
// import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../components/App';
// import mockData  from '../mock-data';
// import CitySearch from '../components/CitySearch';
// import { extractLocations } from '../api';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper,EventsState;
    test('When user opens the app 25 events should be specified by default', ({ given, when, then, and }) => {
        given('user opens the app', () => {
            AppWrapper=mount(<App />);
        });

        when('the user has not specified a number of events yet', () => {
            
        });
        
        then('the number of events should be Twentyfive.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.numberOfEvents').prop('value')).toBe(25);//25 because input box is showing 25
        });

        and('Twentyfive events should be displayed by default.', () => {
            AppWrapper.update();
            EventsState= AppWrapper.state('events')
            expect(AppWrapper.find('.event')).toHaveLength(EventsState.length)//EventsState has length 3 because only 3 events in mockData 
        });
    });


    test('User can change the number of events to be displayed to a desired number', ({ given, when, then }) => {
        given('the number of events displayed by default is Twentyfive', () => {

        });

        when('the user changes the number of events', () => {
            AppWrapper.update();
            AppWrapper.find('.numberOfEvents').simulate('change', { target: { value: 2 }})
        });

        then('the new number of events will be displayed', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(2)
        });
    });
    
});