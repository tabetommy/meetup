import React, { Component } from 'react';


class Event extends Component {
     constructor() {
          super();
          
          this.state = {
               show:false
          }
          }
  
  render() {
     const {events}=this.props
    return (
        <div>
          <h1 className='eventTitle' >{events.title}</h1>
          <p className='eventTimeCity' ></p>
          <button className='expandDetails' onClick={()=>this.setState({show:true})}></button>
          <button className='collapseDetails' onClick={()=>this.setState({show:false})}></button>
          {/*display the details of the event if this.state.show is true*/}
        </div>
    );
  }
}

export default Event;