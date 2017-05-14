import React, {Component, PropTypes} from 'react';

export class SkillView extends Component {
  render() {
    const {skill} = this.props;
    return (
      <div>{skill && skill.name}</div>
    );
  }
}

SkillView.propTypes = {
  skill: PropTypes.object.isRequired
};
