import React, {Component} from 'react';
import {ResumePresenter} from './ResumePresenter';
import * as dal from '../../services/dataAccessLayer';

export class ResumePresenterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resume: null
    };
  }

  componentDidMount() {
    dal.getDataAt('resume')
      .subscribe(
        immResumeData => this.setState({resume: immResumeData.toObject()}),
        err => console.log('Error getting data node', err)
      );
  }

  render() {
    return (
      <ResumePresenter resume={this.state.resume}/>
    );
  }
}
