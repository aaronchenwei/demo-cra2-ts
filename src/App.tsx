import { Button, message } from 'antd';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

@observer
class App extends Component {
  @observable
  private now: Date = new Date();
  private interval?: number;

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.now = new Date();
    }, 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  onClickButton: React.MouseEventHandler<HTMLButtonElement> = event => {
    message.info('This is a normal message');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
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
        <div>
          <Button type="primary" onClick={this.onClickButton}>
            Ant Design
          </Button>
        </div>
        <div>{this.now.toString()}</div>
      </div>
    );
  }
}

export default App;
