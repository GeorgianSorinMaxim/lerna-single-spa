import React from 'react';

import reactLogo from '../assets/react-logo.png';

export default class Root extends React.Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    return (
      <div style={{ marginTop: 100 }}>
        <img src={reactLogo} style={{ width: 100 }} /> <br />
        /app1 renders.
      </div>
    );
  }
}
