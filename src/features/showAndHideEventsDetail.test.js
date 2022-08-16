import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../components/App';


const feature = loadFeature('./src/features/showAndHideEventDetails.feature');

defineFeature(feature, test => {
    let AppWrapper=mount(<App />);
    test('User can expand an event to see it\'s details', ({ given, when, then }) => {
        given('the event\'s details is hidden', () => {
            expect(AppWrapper.find('.event .eventDetails')).toHaveLength(0)
            
        });

        when('the user clicks a button', () => {
            AppWrapper.update();
            AppWrapper.find('.event .expandDetailsBtn').at(0).simulate('click');
        });

        then('the user should see details of the event.', () => {
            expect(AppWrapper.find('.event .eventDetails')).toHaveLength(1)
        });
    });


    test('User can collapse an event to hide it\'s details', ({ given, when, then }) => {
        given('the event\'s details is visible', () => {
            expect(AppWrapper.find('.event .eventDetails').hostNodes()).toHaveLength(1)
        });

        when('the user clicks a button', () => {
            AppWrapper.find('.event .collapseDetailsBtn').at(0).simulate('click');
        });

        then('the event\'s details should be hidden.', () => {
            expect(AppWrapper.find('.event .eventDetails')).toHaveLength(0)
        });
    });

});