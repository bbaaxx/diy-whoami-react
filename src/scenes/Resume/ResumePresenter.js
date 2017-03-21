import React, {Component} from 'react';
import {ResumeHeadingContainer} from './heading/ResumeHeadingContainer';
import {ResumeExperienceContainer} from './experience/ResumeExperienceContainer';

export class ResumePresenter extends Component {
  render() {
    const resume = this.props.resume;
    if (!resume) {
      return null;
    }
    return (
      <div>
        <ResumeHeadingContainer resume={resume}/>
        <hr/>
        <ResumeExperienceContainer resume={resume}/>

      </div>
    );
  }
}

ResumePresenter.propTypes = {
  resume: React.PropTypes.object
};
