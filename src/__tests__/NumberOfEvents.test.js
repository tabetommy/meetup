import React from 'react';
import {shallow} from 'enzyme';
import NumberOfEvents from "../components/NumberOfEvents";

describe('< NumberOfEvents /> Component', ()=>{
    let NumberOfEventsWrapper, eventsNum
    beforeAll(()=>{
        NumberOfEventsWrapper= shallow(<NumberOfEvents 
        eventsNum={eventsNum}
        />)
    })

    test('render text input',()=>{
        expect(NumberOfEventsWrapper.find('.numberOfEvents')).toHaveLength(1)
    })

    test('render text input value consistently with eventNum props',()=>{
        expect(NumberOfEventsWrapper.find('.numberOfEvents').prop('value')).toBe(eventsNum);
    })

    
    // test('change state when text input changes',()=>{
    //     NumberOfEventsWrapper.setState({
    //         numOfEvents: 20
    //       });
    //     const eventObject = { target: { value: 5 }};
    //     NumberOfEventsWrapper.find('.numberOfEvents').simulate('change', eventObject);
    //     expect(NumberOfEventsWrapper.state('numOfEvents')).toBe(5); 
    // });

    // render accurate number of Events(intrgrated because it depends on the Event and
    // NumberOfEvents components)
        
    
})