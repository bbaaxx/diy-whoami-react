import React, {Component} from 'react';

export class LayoutComponent extends Component {
  render() {
    return (
      <div>
        {this.props.headerElement && this.props.headerElement}
        {this.props.routerElement && this.props.routerElement}
        {this.props.footerElement && this.props.footerElement}
      </div>
    );
  }
}

LayoutComponent.propTypes = {
  routerElement: React.PropTypes.element,
  headerElement: React.PropTypes.element,
  footerElement: React.PropTypes.element
};
