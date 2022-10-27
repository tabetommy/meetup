import React, { Component } from 'react';
import {InfoAlert} from '../Alert';
import '../styles/citysearch.css';

class CitySearch extends Component {
    constructor() {
        super();
        
        this.state = {
            query: '',
            suggestions: [],
            showSuggestions: undefined,
            infoText:'text',
            showAlert:false
            
        }
        }

    handleInputChanged = (event) => {
        const value = event.target.value;
        const suggestions = this.props.locations.filter((location) => {
            return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
        });
        if (suggestions.length === 0) {
            this.setState({
              query: value,
              showAlert:true,
              infoText: 'We can not find the city you are looking for. Please try another city',
            });
          } else {
            return this.setState({
              query: value,
              suggestions,
              showAlert:false,
              infoText:''
            });
          }
        };

    handleItemClicked = (suggestion) => {
        this.setState({
            query: suggestion,
            suggestions: [],
            showSuggestions:false,
            showAlert:false,
            infoText:''
        });
        this.props.getQueryState(suggestion)
        this.props.updateEvents(suggestion);
        }
  
  render() {
    return (
      <div className="CitySearch">
        <div style={{visibility:this.state.showAlert?'visible':'hidden'}}>
          <InfoAlert text={this.state.infoText} />
        </div>
        <input
        type="text"
        className="city"
        placeholder=" Search for a city "
        value={this.state.query}
        onChange={this.handleInputChanged}
        onFocus={() => { this.setState({ showSuggestions: true }) }}
        />
        <ul 
        className="suggestions"
        style={this.state.showSuggestions ? {}: { display: 'none' }}
        >
            {this.state.suggestions.map((suggestion) => (
            <li 
            key={suggestion}
            onClick={() => this.handleItemClicked(suggestion)}
            >{suggestion}</li>
            ))}
            <li key='all' onClick={() => this.handleItemClicked("all")}>
                <b>See all cities</b>
            </li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;