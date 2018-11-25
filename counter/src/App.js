import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    contador: 0
  }
  
  constructor(props){
    super(props);
    this.clear = this.clear.bind(this);
  }

  increment = () => {
    this.setState({
      contador: this.state.contador+1
    })
  }
  decrement = () => {
    this.setState({
      contador: this.state.contador-1
    })
  }

  clear() {
    this.setState({
      contador: 0
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.decrement}>-</button>
          Contador: {this.state.contador}
          <button onClick={this.increment}>+</button>
          <p>
          <button onClick={this.clear}>clear</button>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
