import React, {PropTypes, Component} from 'react';
import avsanResolver from '../../services/avsan';

export class LandingComponent extends Component {
  render() {
    const {name, title, status, welcomeMessage} = this.props.ownerData;
    const aOrAn = avsanResolver(title).article;

    return (
      <div>
        <h1 className="hidden-xs-up">{name} - {title}</h1>
        <h2>Hello</h2>
        <h2>My name is {name}</h2>
        <h3>I am {aOrAn} <span>{title}</span> {status}</h3>
        <p>{welcomeMessage}</p>
      </div>
    );
  }
}

LandingComponent.propTypes = {
  ownerData: PropTypes.object
};
