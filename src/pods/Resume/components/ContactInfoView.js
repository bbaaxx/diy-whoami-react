import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class ContactInfoView extends Component {
  render() {
    const {contactInfo, residence} = this.props.resume;
    return (
      <div>
        {contactInfo && contactInfo.twitter}
        {contactInfo && contactInfo.website}
        {contactInfo && contactInfo.skype}
        {residence}
      </div>
    );
  }
}

ContactInfoView.propTypes = {
  resume: PropTypes.object.isRequired
};
