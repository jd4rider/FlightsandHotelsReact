import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FindFlight from './components/FindFlight';

class App extends Component {
  componentDidMount = () => {
    fetch("https://skyscanner-skyscanner-flight-search-v1.p.mashape.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=Missoula", {
      method: "GET",
      headers: {
        "X-Mashape-Key": process.env.REACT_APP_MASHAPE_API_KEY,
        "X-Mashape-Host": "skyscanner-skyscanner-flight-search-v1.p.mashape.com"
      }
    }).then(function (response) {
      //response.status     //=> number 100–599
      //response.statusText //=> String
      //response.headers    //=> Headers
      //response.url        //=> String

      //return response.text()
      console.log(response.text());
    }, function (error) {
      //error.message //=> String
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FindFlight></FindFlight>
      </div>
    );
  }
}

export default App;
