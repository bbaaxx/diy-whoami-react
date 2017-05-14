import React, {Component, PropTypes} from 'react';
import {SkillView} from './SkillView';

export class SkillsPanel extends Component {
  render() {
    const {skills} = this.props;
    return (
      <div>
        {skills && Object.keys(skills).map(key => {
          return (<SkillView skill={skills[key]} key={key}/>);
        })}
      </div>
    );
  }
}

SkillsPanel.propTypes = {
  skills: PropTypes.object
};
