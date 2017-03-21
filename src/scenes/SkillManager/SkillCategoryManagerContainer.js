import React, {Component} from 'react';
import {DataEditContainer} from '../data-edit/DataEditContainer';

export class SkillCategoryManagerContainer extends Component {

  render() {
    return (
      <DataEditContainer dataNodeId="skillCategories" dataModelId="SkillCategory"/>
    );
  }
}
