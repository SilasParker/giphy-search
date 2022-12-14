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

  //calls the function to search giphy api and sets the search result state
  handleSearch = (query, limit, rating, lang) => {
    searchGiphy(query, limit, rating, lang)
    .then(response => response.json())
    .then(content => {
      let allGifs = content.data.map((element) => element.images.downsized.url);
      this.setState({searchResults: allGifs});
    })
  }

  render() {
    return (
      <div className="App">
        <header><h1>GIPHY TIME</h1></header>
        <InputForm search={this.handleSearch}/>
        <Results images={this.state.searchResults} />
      </div>
    );
  }
}
