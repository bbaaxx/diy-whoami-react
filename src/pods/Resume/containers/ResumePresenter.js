import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ResumeActions from '../actions/index';

import {ResumeLayout as Layout} from '../components/ResumeLayout';

class ResumePresenter extends Component {
  componentDidMount() {
    const {actions} = this.props;
    actions.getResume();
  }
  render() {
    const {resume, actions} = this.props;
    return (
      <div>
        <Layout resume={resume.resumeData} actions={actions}/>
      </div>
    );
  }
}

ResumePresenter.propTypes = {
  resume: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    resume: state.resume
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ResumeActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResumePresenter);
