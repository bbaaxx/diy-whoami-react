import React, {Component, PropTypes} from 'react';

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
