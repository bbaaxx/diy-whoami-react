import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class DbItemView extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.dbItem).map(key => {
          return (
            <p key={key}>
              <label>{key}:</label>
              {this.props.dbItem[key]}
            </p>
          );
        })}
      </div>
    );
  }
}

DbItemView.propTypes = {
  dbItem: PropTypes.object.isRequired
};
