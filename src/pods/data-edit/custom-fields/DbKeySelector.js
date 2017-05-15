import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getDalInstance} from '../../../services/dataAccessLayer';
import {DbKeyItem} from './DbKeyItem';

export class DbKeySelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionItems: [],
      selectedItems: [].concat(this.props.formData || [])
    };
    this.handleItemSelection = this.handleItemSelection.bind(this);
  }

  componentWillMount() {
    const {nodeId, modelId} = this.props.formContext[this.props.name];
    this.dataservice = getDalInstance(nodeId, modelId);
  }

  componentDidMount() {
    this.dataservice.subscribeToNode().subscribe(response => {
      this.setState(() => ({collectionItems: response.toArray()}));
    });
  }

  componentWillDismount() {
    this.dataservice.closeNodeRef();
  }

  handleItemSelection(itemKey) {
    const stateUpdate = [].concat(this.state.selectedItems);
    const popIndex = stateUpdate.indexOf(itemKey);
    if (popIndex === -1) {
      stateUpdate.push(itemKey);
    } else {
      stateUpdate.splice(popIndex, 1);
    }

    this.setState(() => {
      this.props.onChange(stateUpdate);
      return {selectedItems: stateUpdate};
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.collectionItems.map((item, key) => {
            return (
              <DbKeyItem
                key={item._dbKey}
                arrayKey={key}
                itemDbKey={item._dbKey}
                item={item}
                isSelected={this.state.selectedItems.includes(item._dbKey)}
                onSelect={this.handleItemSelection}
                />
            );
          })}
        </ul>
      </div>
    );
  }
}

DbKeySelector.propTypes = {
  name: PropTypes.string.isRequired,
  formData: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  formContext: PropTypes.object.isRequired
};
