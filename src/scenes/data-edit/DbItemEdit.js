import React, {Component} from 'react';
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
  formValues: React.PropTypes.object,
  schemas: React.PropTypes.shape({
    dataSchema: React.PropTypes.object,
    dalSchema: React.PropTypes.object,
    uiSchema: React.PropTypes.object
  }),
  itemKey: React.PropTypes.oneOfType([
    React.PropTypes.string, React.PropTypes.number
  ]),
  onValueChanges: React.PropTypes.func,
  onSave: React.PropTypes.func,
  onError: React.PropTypes.func,
  onCancel: React.PropTypes.func,
  onDelete: React.PropTypes.func
};
