import React, {Component} from 'react';
import {DataEditContainer} from '../data-edit/DataEditContainer';

export class CompanyManagerContainer extends Component {

  render() {
    return (
      <DataEditContainer dataNodeId="companies" dataModelId="Company"/>
    );
  }
}
