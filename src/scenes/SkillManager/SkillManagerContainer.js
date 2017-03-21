import React, {Component} from 'react';
import {DataEditContainer} from '../data-edit/DataEditContainer';

export class SkillManagerContainer extends Component {

  render() {
    return (
      <div>
        <h2>Edit skills</h2>
        <DataEditContainer dataNodeId="skills" dataModelId="Skill"/>
        <hr/>
        {/* <h2>Edit skill categories</h2>
        <DataEditContainer dataNodeId="skillCategories" dataModelId="SkillCategory"/>
        <hr/>
        <h2>Edit skill units</h2>
        <DataEditContainer dataNodeId="skillUnits" dataModelId="SkillUnit"/>
        <hr/> */}
      </div>
    );
  }
}
