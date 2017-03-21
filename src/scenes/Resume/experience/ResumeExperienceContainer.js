import React, {Component} from 'react';
import {ResumeExperience} from './ResumeExperience';

export class ResumeExperienceContainer extends Component {
  render() {
    return (
      <ResumeExperience
        professionalExperiences={this.props.resume.professionalExperience}
        />
    );
  }
}

ResumeExperienceContainer.propTypes = {
  resume: React.PropTypes.object
};
