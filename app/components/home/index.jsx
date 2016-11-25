import React from 'react';
import Header from '../header';
import Asider from '../asider';
import './home.scss';

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="wrap">
        <Header />
        <Asider />
        <div className="container">
          I'm Home.
        </div>
      </div>
    )
  }
}