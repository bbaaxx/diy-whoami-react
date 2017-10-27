import React, {Component} from 'react';
import PropTypes from 'prop-types';

import TodoTextInput from './TodoTextInput';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
        <TodoTextInput
          newTodo
          onSave={this.handleSave}
          placeholder="Type your stuff here"
          />
      </header>
    );
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;
