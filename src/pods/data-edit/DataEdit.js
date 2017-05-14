import React, {Component} from 'react';
import {DbItemContainer} from './DbItemContainer';

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
  dbItems: React.PropTypes.array,
  newDbItems: React.PropTypes.array,
  schemas: React.PropTypes.shape({
    dataSchema: React.PropTypes.object,
    dalSchema: React.PropTypes.object,
    uiSchema: React.PropTypes.object
  }),
  uiModelName: React.PropTypes.string,
  onAddNewItem: React.PropTypes.func,
  onCancelAddNewItem: React.PropTypes.func,
  onCreateDbItem: React.PropTypes.func,
  onUpdateDbItem: React.PropTypes.func,
  onDeleteDbItem: React.PropTypes.func
};
