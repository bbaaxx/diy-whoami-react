import React, {Component, PropTypes} from 'react';
import {ExperienceView} from './ExperienceView';

export class ExperiencePanel extends Component {
  render() {
    const {jobExperiences} = this.props;
    return (
      <div>
        {jobExperiences && Object.keys(jobExperiences).map(key => {
          return (<ExperienceView jobExperience={jobExperiences[key]} key={key}/>);
        })}
      </div>
    );
  }
}

ExperiencePanel.propTypes = {
  jobExperiences: PropTypes.object
};
