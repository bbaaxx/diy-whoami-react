import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ProfessionalHighlight extends Component {
  render() {
    const {professionalHighlight} = this.props;
    return (
      <div>
        <span>{professionalHighlight && professionalHighlight.heading}</span> {professionalHighlight && professionalHighlight.text}
      </div>
    );
  }
}

ProfessionalHighlight.propTypes = {
  professionalHighlight: PropTypes.object.isRequired
};
