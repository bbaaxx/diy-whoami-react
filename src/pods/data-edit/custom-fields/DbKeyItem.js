import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class DbKeyItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    this.props.onSelect(this.props.itemDbKey);
  }

  render() {
    return (
      <li
        className={
          `db-key-item ${this.props.isSelected ? 'db-key-item__selected' : ''}`
        }
        onClick={this.handleClick}
        >
        {this.props.item.name}
      </li>
    );
  }
}

DbKeyItem.propTypes = {
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  itemDbKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
};
