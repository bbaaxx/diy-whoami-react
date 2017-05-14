import React, {Component, PropTypes} from 'react';
import {ProfessionalHighlight} from './ProfessionalHighlight';

export class ProfessionalHighlights extends Component {
  render() {
    const {professionalHighlights} = this.props.resume;
    return (
      <div>
        {professionalHighlights && Object.keys(professionalHighlights).map(key => {
          return (<ProfessionalHighlight professionalHighlight={professionalHighlights[key]} key={key}/>);
        })}
      </div>
    );
  }
}

ProfessionalHighlights.propTypes = {
  resume: PropTypes.object
};
