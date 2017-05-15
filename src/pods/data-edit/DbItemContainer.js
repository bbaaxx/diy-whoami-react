import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {DbItemView} from './DbItemView';
import {DbItemEdit} from './DbItemEdit';

export class DbItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dbItemInState: {},
      editMode: !this.props.dbKey
    };
    this.handleSave = this.handleSave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleEditModeToggle = this.handleEditModeToggle.bind(this);
    this.handleValueChanges = this.handleValueChanges.bind(this);
  }

  handleValueChanges(evt) {
    this.setState({dbItemInState: Object.assign({}, evt.formData)});
  }

  handleSave(evt) {
    evt.preventDefault();
    if (this.props.dbKey) {
      this.props.onUpdateDbItem(this.props.dbKey, this.state.dbItemInState);
    } else {
      this.props.onCreateDbItem(this.props.arrayKey, this.state.dbItemInState);
    }
    this.setState({editMode: false});
  }

  handleErrors(err) {
    console.log('Error!!!', err);
  }

  handleDelete(evt) {
    evt.preventDefault();
    this.props.onDeleteDbItem(this.props.dbKey);
  }

  handleCancel(evt) {
    evt.preventDefault();
    this.props.onCancelAddNewDbItem(this.props.arrayKey, evt);
  }

  handleEditModeToggle() {
    const editMode = this.state.editMode;
    if (!this.state.editMode) {
      this.setState({
        dbItemInState: this.props.dbItem
      });
    }
    this.setState({
      editMode: !editMode
    });
  }

  render() {
    let view;
    if (this.state.editMode) {
      view = (
        <DbItemEdit
          formValues={this.state.dbItemInState}
          itemKey={this.props.dbKey}
          schemas={this.props.schemas}
          onValueChanges={this.handleValueChanges}
          onSave={this.handleSave}
          onError={this.handleErrors}
          onDelete={this.handleDelete}
          onCancel={this.handleCancel}
          />
      );
    } else {
      view = (
        <DbItemView dbItem={this.props.dbItem}/>
      );
    }
    return (
      <div>
        {view}
        {this.props.dbKey &&
          <button name="editDbItem" onClick={this.handleEditModeToggle}>
            {this.state.editMode ? 'Cancel' : 'Edit'}
          </button>
        }
      </div>
    );
  }
}

DbItemContainer.propTypes = {
  dbItem: PropTypes.object.isRequired,
  schemas: PropTypes.shape({
    dataSchema: PropTypes.object,
    dalSchema: PropTypes.object,
    uiSchema: PropTypes.object
  }).isRequired,
  dbKey: PropTypes.string.isRequired,
  arrayKey: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  onCreateDbItem: PropTypes.func.isRequired,
  onUpdateDbItem: PropTypes.func.isRequired,
  onCancelAddNewDbItem: PropTypes.func.isRequired,
  onDeleteDbItem: PropTypes.func.isRequired
};
