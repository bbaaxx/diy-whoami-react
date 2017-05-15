import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {ProfessionalHighlight} from './ProfessionalHighlight';

export class ProfessionalHighlights extends Component {
  render() {
    const {professionalHighlights} = this.props.resume;
    return (
      <div>
        {professionalHighlights && Object.keys(professionalHighlights).map(key => {
          return (<ProfessionalHighlight key={key} professionalHighlight={professionalHighlights[key]}/>);
        })}
      </div>
    );
  }
}

ProfessionalHighlights.propTypes = {
  resume: PropTypes.object.isRequired
};
