import React, {Component} from 'react';
import {DbItemContainer} from './DbItemContainer';
import PropTypes from 'prop-types';

export class DataEdit extends Component {
  render() {
    const makeElement = (item, key) => {
      return (
        <DbItemContainer
          key={key}
          arrayKey={key}
          dbKey={item._dbKey}
          dbItem={item}
          schemas={this.props.schemas}
          onCreateDbItem={this.props.onCreateDbItem}
          onUpdateDbItem={this.props.onUpdateDbItem}
          onDeleteDbItem={this.props.onDeleteDbItem}
          onCancelAddNewItem={this.props.onCancelAddNewItem}
          />);
    };

    return (
      <div>
        {this.props.dbItems.map(makeElement)}
        {this.props.newDbItems.map(makeElement)}
        <a href="#" onClick={this.props.onAddNewItem}>+Add {this.props.uiModelName}...</a>
      </div>
    );
  }
}

DataEdit.propTypes = {
  dbItems: PropTypes.array.isRequired,
  newDbItems: PropTypes.array.isRequired,
  schemas: PropTypes.shape({
    dataSchema: PropTypes.object.isRequired,
    dalSchema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object.isRequired
  }).isRequired,
  uiModelName: PropTypes.string.isRequired,
  onAddNewItem: PropTypes.func.isRequired,
  onCancelAddNewItem: PropTypes.func.isRequired,
  onCreateDbItem: PropTypes.func.isRequired,
  onUpdateDbItem: PropTypes.func.isRequired,
  onDeleteDbItem: PropTypes.func.isRequired
};
