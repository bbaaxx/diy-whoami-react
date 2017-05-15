import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';
import {DbKeySelector} from './custom-fields/DbKeySelector';

export class DbItemEdit extends Component {
  render() {
    const customFields = {dbKeySelector: DbKeySelector};

    return (
      <div>
        <Form
          schema={this.props.schemas.dataSchema}
          uiSchema={this.props.schemas.uiSchema}
          formContext={this.props.schemas.dalSchema}
          formData={this.props.formValues}
          onChange={this.props.onValueChanges}
          onSubmit={this.props.onSave}
          onError={this.props.onError}
          fields={customFields}
          >
          <div>
            <button name="submit" type="submit" onClick={this.props.onSave}>Save</button>
            {this.props.itemKey ?
              <button name="delete" onClick={this.props.onDelete}>Delete</button> :
              <button name="cancel" onClick={this.props.onCancel}>Cancel</button>
            }
          </div>
        </Form>
      </div>
    );
  }
}

DbItemEdit.propTypes = {
  formValues: PropTypes.object.isRequired,
  schemas: PropTypes.shape({
    dataSchema: PropTypes.object,
    dalSchema: PropTypes.object,
    uiSchema: PropTypes.object
  }).isRequired,
  itemKey: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number
  ]).isRequired,
  onValueChanges: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
