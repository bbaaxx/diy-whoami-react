import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppLayoutComponent} from '../components/AppLayoutComponent';
import customMuiTheme from './customMuiTheme';
import PropTypes from 'prop-types';

export class AppLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeader: true,
      showFooter: true
    };
  }

  render() {
    const headerElement = null;
    // DISABLED: const headerElement = <div>I am the header</div>;
    const footerElement = null;
    // DISABLED: const footerElement = <div>I am the footer</div>;
    return (
      <MuiThemeProvider muiTheme={customMuiTheme}>
        <AppLayoutComponent
          routerElement={this.props.children}
          headerElement={headerElement}
          footerElement={footerElement}
          />
      </MuiThemeProvider>
    );
  }
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired
};
