import React, {Component} from 'react';
import {DataEdit} from './DataEdit';
import {getDalInstance} from '../../services/dataAccessLayer';

export class DataEditContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataModel: {},
      dbItems: [],
      newDbItems: []
    };

    this.handleCreateDbItem = this.handleCreateDbItem.bind(this);
    this.handleUpdateDbItem = this.handleUpdateDbItem.bind(this);
    this.handleDeleteDbItem = this.handleDeleteDbItem.bind(this);
    this.handleAddNewItem = this.handleAddNewItem.bind(this);
    this.handleCancelAddNewItem = this.handleCancelAddNewItem.bind(this);
  }

  componentWillMount() {
    this.dataservice = getDalInstance(this.props.dataNodeId, this.props.dataModelId);
  }

  componentDidMount() {
    this.dataservice.getSchemaHelper()
      .subscribe(
        schemodel => {
          this.setState(() => ({
            schemas: schemodel.schemas,
            dataModel: schemodel.dataModel
          }));
          this.dataservice.subscribeToNode()
            .subscribe(
              response => this.setState(() => ({dbItems: response.toArray()})),
              err => console.log('Error getting data node', err)
            );
        },
        err => console.log('Error getting schemas', err)
      );
  }

  componentWillUnmount() {
    this.dataservice.closeNodeRef();
  }

  handleAddNewItem(evt) {
    evt.preventDefault();
    const newDbItems = [].concat(this.state.newDbItems);
    newDbItems.push(Object.assign({}, this.state.dataModel));
    this.setState({newDbItems});
  }

  handleCancelAddNewItem(arrayKey) {
    this.removeDbItemFromStateArray(arrayKey);
  }

  handleCreateDbItem(arrayKey, dbItemObject) {
    this.dataservice.createItem(dbItemObject)
      .subscribe(
        () => console.info('Item created'),
        err => console.log(err),
        () => this.removeDbItemFromStateArray(arrayKey)
      );
  }

  handleUpdateDbItem(dbItemKey, dbItemObject) {
    this.dataservice.updateItem(dbItemKey, dbItemObject)
      .subscribe(
        () => console.info('Item updated'),
        err => console.error(err)
      );
  }

  handleDeleteDbItem(dbItemKey) {
    this.dataservice.deleteItem(dbItemKey)
      .subscribe(
        () => console.info('Item deleted'),
        err => console.error(err)
      );
  }

  removeDbItemFromStateArray(arrayKey) {
    const newDbItems = [].concat(this.state.newDbItems);
    newDbItems.splice(arrayKey, 1);
    this.setState({newDbItems});
  }

  render() {
    return (
      <DataEdit
        dbItems={this.state.dbItems}
        newDbItems={this.state.newDbItems}
        schemas={this.state.schemas}
        uiModelName={this.props.dataModelId}
        onAddNewDbItem={this.handleAddNewItem}
        onCancelAddNewDbItem={this.handleCancelAddNewItem}
        onCreateDbItem={this.handleCreateDbItem}
        onUpdateDbItem={this.handleUpdateDbItem}
        onDeleteDbItem={this.handleDeleteDbItem}
        />);
  }
}
DataEditContainer.propTypes = {
  dataNodeId: React.PropTypes.string.isRequired,
  dataModelId: React.PropTypes.string.isRequired
};
