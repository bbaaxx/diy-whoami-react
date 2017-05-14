import React, {Component} from 'react';
import {DataEditContainer} from '../data-edit/DataEditContainer';

export class SkillUnitManagerContainer extends Component {

  render() {
    return (
      <DataEditContainer dataNodeId="skillUnits" dataModelId="SkillUnit"/>
    );
  }
}
