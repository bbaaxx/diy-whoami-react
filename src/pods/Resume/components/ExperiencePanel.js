import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ExperienceView} from './ExperienceView';

export class ExperiencePanel extends Component {
  render() {
    const {jobExperiences} = this.props;
    return (
      <div>
        {jobExperiences && Object.keys(jobExperiences).map(key => {
          return (<ExperienceView key={key} jobExperience={jobExperiences[key]}/>);
        })}
      </div>
    );
  }
}

ExperiencePanel.propTypes = {
  jobExperiences: PropTypes.object.isRequired
};
