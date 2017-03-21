import React, {Component} from 'react';

export class ProfessionalExperience extends Component {
  render() {
    const pe = this.props.profexEntry;
    return (
      <div>
        <p>{pe.companyName}</p>
        <p>{pe.endUserCompany && `For: ${pe.endUserCompany}`}</p>
        <p>{pe.startYear}, {pe.endYear}</p>
        <p>{pe.companyDescription}</p>
        <p>{pe.role}</p>
      </div>
    );
  }
}

ProfessionalExperience.propTypes = {
  profexEntry: React.PropTypes.object
};
