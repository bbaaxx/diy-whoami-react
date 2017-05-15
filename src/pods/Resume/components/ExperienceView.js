import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ExperienceView extends Component {
  render() {
    const {jobExperience} = this.props;

    return jobExperience && (
      <div>
        {jobExperience.title}
        {jobExperience.employer}
      </div>
    );
  }
}

ExperienceView.propTypes = {
  jobExperience: PropTypes.object.isRequired
};
