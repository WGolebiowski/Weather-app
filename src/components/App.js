import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";

const APIKey = "539610a05e64aa246a4900a849d73e34";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    wind: "",
    pressure: "",
    err: ""
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
      .then(res => {
        if (res.ok) {
          return res;
        }
        throw Error("Lypa");
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          err: false,
          date: new Date().toLocaleString(),
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp.toFixed(),
          wind: data.wind.speed,
          pressure: data.main.pressure
        });
      })
      .catch(err => {
        alert("City not found");
        this.setState({
          err: true,
          value: ""
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
