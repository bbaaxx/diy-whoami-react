import React, {Component} from 'react';

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
  isSelected: React.PropTypes.bool,
  onSelect: React.PropTypes.func.isRequired,
  item: React.PropTypes.object.isRequired,
  itemDbKey: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]).isRequired
};
