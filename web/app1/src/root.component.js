import { Component } from 'react';

import reactLogo from '../assets/react-logo.png';

export default class Root extends Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return (
      <div style={{ marginTop: 100 }}>
        <img src={reactLogo} style={{ width: 100 }} alt="React logo" /> <br />
        /app1 renders.
      </div>
    );
  }
}
