import React, {Component} from 'react';
import {LandingComponent} from './LandingComponent';

export class LandingContainer extends Component {
  render() {
    const ownerData = {
      name: 'Eduardo Mosqueda',
      title: 'freelance web/mobile app developer + agile coach',
      status: 'for hire',
      welcomeMessage: 'Thanks for taking the time to learn about me'
    };
    return (
      <LandingComponent ownerData={ownerData}/>
    );
  }
}
