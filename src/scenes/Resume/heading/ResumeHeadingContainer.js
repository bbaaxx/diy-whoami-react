import React, {Component} from 'react';
import {ResumeHeading} from './ResumeHeading';

export class ResumeHeadingContainer extends Component {
  render() {
    return (
      <ResumeHeading
        resumeTitle={this.props.resume.selfGivenTitle}
        ownerName={this.props.resume.ownerName}
        contactInfo={this.props.resume.contactInfo}
        executiveSummary={this.props.resume.executiveSummary}
        />
    );
  }
}

ResumeHeadingContainer.propTypes = {
  resume: React.PropTypes.object
};
