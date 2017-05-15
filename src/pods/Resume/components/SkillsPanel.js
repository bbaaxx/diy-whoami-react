import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {SkillView} from './SkillView';

export class SkillsPanel extends Component {
  render() {
    const {skills} = this.props;
    return (
      <div>
        {skills && Object.keys(skills).map(key => {
          return (<SkillView key={key} skill={skills[key]}/>);
        })}
      </div>
    );
  }
}

SkillsPanel.propTypes = {
  skills: PropTypes.object.isRequired
};
