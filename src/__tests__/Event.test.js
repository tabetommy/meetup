import React from 'react';
import { shallow } from 'enzyme';
import Event from '../components/Event';
import  mockData  from '../mock-data';

describe('<Event />',()=>{
    let EventWrapper
    beforeAll(()=>{
        EventWrapper=shallow(<Event events={mockData[0]}/>)
    })

    test('render events summary',()=>{
        expect(EventWrapper.find('.eventTitle')).toHaveLength(1);
      
    });

    test('render events time and city component',()=>{
        expect(EventWrapper.find('.eventTimeCity')).toHaveLength(1);
        
    });

    test('render all the basic elements of <Event /> component',()=>{
        expect(EventWrapper.find('.expandDetailsBtn')).toHaveLength(1)
    });

    test('expand event\'s details on button click', ()=>{
        EventWrapper.setState({
            showDetails:false
          })
        EventWrapper.find('.expandDetailsBtn').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(true);
    });

    test('collapse event\'s details on button click', ()=>{
        EventWrapper.setState({
            showDetails:true
          })
        EventWrapper.find('.collapseDetailsBtn').simulate('click');
        expect(EventWrapper.state('showDetails')).toBe(false);
    });

})