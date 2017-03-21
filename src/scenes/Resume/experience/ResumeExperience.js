import React, {Component} from 'react';
import {ProfessionalExperience} from './ProfessionalExperience';

export class ResumeExperience extends Component {
  render() {
    return (
      <section id="professional-experience">
        <h3>Professional experience</h3>
        {this.props.professionalExperiences.map((item, key) => {
          return (
            <ProfessionalExperience profexEntry={item} key={key}/>
          );
        })}
      </section>
    );
  }
}

ResumeExperience.propTypes = {
  // ownerName: React.PropTypes.string,
  // resumeTitle: React.PropTypes.string,
  professionalExperiences: React.PropTypes.array
};
