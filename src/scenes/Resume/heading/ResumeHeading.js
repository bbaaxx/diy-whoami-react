import React, {Component} from 'react';

export class ResumeHeading extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.ownerName}</h3>
        <p>{`${this.props.contactInfo.restricted.email} | ${this.props.contactInfo.restricted.mainPhone}`}</p>
        <h2>{this.props.resumeTitle}</h2>
        <p>{this.props.contactInfo.restricted.city}, {this.props.contactInfo.public.country}</p>
      </div>
    );
  }
}

ResumeHeading.propTypes = {
  ownerName: React.PropTypes.string,
  resumeTitle: React.PropTypes.string,
  contactInfo: React.PropTypes.object
};
