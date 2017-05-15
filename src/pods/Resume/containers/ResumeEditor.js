import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as ResumeActions from '../actions/index';
import PropTypes from 'prop-types';

class ResumeEditor extends Component {
  componentDidMount() {
    const {actions} = this.props;
    actions.getResume();
  }
  render() {
    const {resume, actions} = this.props;
    console.log(resume, actions);
    return (
      <div>
        Resume Editor
      </div>
    );
  }
}

ResumeEditor.propTypes = {
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
)(ResumeEditor);
