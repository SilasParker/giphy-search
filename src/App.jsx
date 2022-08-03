import './App.css';
import InputForm from './components/InputForm';
import Results from './components/Results';
import React, { Component } from 'react';
import searchGiphy from './searchGiphy';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: []
    }
  }

  handleSearch = event => {
    console.log("value 2: "+event);
    searchGiphy(event)
    .then(response => response.json())
    .then(content => {
      let allGifs = content.data.map((element) => element.images.downsized.url);
      this.setState({searchResults: allGifs});
    })
  }

  render() {
    return (
      <div className="App">
        <header>GIPHY TIME</header>
        <InputForm search={this.handleSearch}/>
        <Results images={this.state.searchResults} />
      </div>
    );
  }
}
