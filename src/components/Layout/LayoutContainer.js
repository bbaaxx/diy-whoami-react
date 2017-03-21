import React, {Component} from 'react';
import {LayoutComponent} from './LayoutComponent';

export class LayoutContainer extends Component {
  render() {
    const headerElement = null;
    // const headerElement = <p>I am the header</p>;
    const footerElement = null;
    // const footerElement = <p>I am the footer</p>;
    return (
      <LayoutComponent
        routerElement={this.props.children}
        headerElement={headerElement}
        footerElement={footerElement}
        />
    );
  }
}

LayoutContainer.propTypes = {
  children: React.PropTypes.element
};
