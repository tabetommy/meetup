import React from 'react';
import {shallow} from 'enzyme';
import NumberOfEvents from "../NumberOfEvents";

describe('< NumberOfEvents /> Component', ()=>{
    let NumberOfEventsWrapper
    beforeAll(()=>{
        NumberOfEventsWrapper= shallow(<NumberOfEvents />)
    })

    test('render text input',()=>{
        expect(NumberOfEventsWrapper.find('.number')).toHaveLength(1)
    })

    test('render text input correctly',()=>{
        const numOfEvents=NumberOfEventsWrapper.state('numOfEvents');
        expect(NumberOfEventsWrapper.find('.number').prop('value')).toBe(numOfEvents);
    })

    test('render 32 events by default',()=>{
        // NumberOfEventsWrapper.setState({
        //     numOfEvents:1
        // })
        expect(NumberOfEventsWrapper.state('numOfEvents')).toBe(32);
    });
    
    test('change state when text input changes',()=>{
        NumberOfEventsWrapper.setState({
            numOfEvents: 20
          });
        const eventObject = { target: { value: 5 }};
        NumberOfEventsWrapper.find('.number').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numOfEvents')).toBe(5); 
    });

    // render accurate number of Events(intrgrated because it depends on the Event and
    // NumberOfEvents components)
        
    
})