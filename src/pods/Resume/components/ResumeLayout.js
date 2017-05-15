import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {ResumeHeading} from './ResumeHeading';
import {ContactInfoView} from './ContactInfoView';
import {SkillsPanel} from './SkillsPanel';
import {ExperiencePanel} from './ExperiencePanel';
import {ProfessionalHighlights} from './ProfessionalHighlights';

export class ResumeLayout extends Component {
  render() {
    const {resume} = this.props;

    return (
      <div>
        <ResumeHeading resume={resume}/>
        <ContactInfoView resume={resume}/>
        <ProfessionalHighlights resume={resume}/>
        <ExperiencePanel jobExperiences={resume.jobExperiences}/>
        <SkillsPanel skills={resume.skills}/>
      </div>
    );
  }
}

ResumeLayout.propTypes = {
  resume: PropTypes.object.isRequired
};
