import React,{Component} from 'react';

class Alert extends Component{

    constructor(props){
        super(props);
        this.class=null;
        this.color= null;
        
    }

    getStyle=()=>{
        return {
            color:this.color,
        }
    }

    getClass=()=>{
        return this.class
    }
 
    
    render(){
       return(
        <p 
        className={this.getClass()}
        style={this.getStyle()} >
            {this.props.text}
        </p>
        
       ) 
    }
}

class InfoAlert extends Alert {
    constructor(props) {
      super(props);
      this.class='info-alert'
      this.color = 'blue';
      
    }
  }

class ErrorAlert extends Alert {
constructor(props) {
    super(props);
    this.name='error-alert';
    this.color = 'red';
}
}

  export { InfoAlert, ErrorAlert };