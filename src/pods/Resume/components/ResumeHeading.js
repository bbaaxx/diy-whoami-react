import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ResumeHeading extends Component {
  render() {
    const {name, title} = this.props.resume;
    return (
      <div>
        <h2>
          {name}
          <br/>
          {title}
        </h2>
      </div>
    );
  }
}

ResumeHeading.propTypes = {
  resume: PropTypes.object.isRequired
};
