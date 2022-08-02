import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event />',()=>{
    let EventWrapper
    beforeAll(()=>{
        EventWrapper=shallow(<Event events={mockData}/>)
    })

    test('render all the basic elements of an Event',()=>{
        expect(EventWrapper.find('.eventTitle')).toHaveLength(1);
        expect(EventWrapper.find('.eventTimeCity')).toHaveLength(1);
        expect(EventWrapper.find('.expandDetails')).toHaveLength(1)
    });

    test('expand event\'s details on button click', ()=>{
        EventWrapper.setState({
            show:false
          })
        EventWrapper.find('.expandDetails').simulate('click');
        expect(EventWrapper.state('show')).toBe(true);
    });

    test('collapse event\'s details on button click', ()=>{
        EventWrapper.setState({
            show:true
          })
        EventWrapper.find('.collapseDetails').simulate('click');
        expect(EventWrapper.state('show')).toBe(false);
    });

})