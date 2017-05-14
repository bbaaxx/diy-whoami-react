import React, {Component, PropTypes} from 'react';

export class ExperienceView extends Component {
  render() {
    const {jobExperience} = this.props;

    return jobExperience && (
      <div>
        {jobExperience.title}
        {jobExperience.employer}
      </div>
    );
    // return (
    //   <div>{jobExperience.title}</div>
    // );
  }
}

ExperienceView.propTypes = {
  jobExperience: PropTypes.object
  // jobExperience: PropTypes.object.isRequired
};
