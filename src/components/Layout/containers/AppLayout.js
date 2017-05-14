import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {AppLayoutComponent} from '../components/AppLayoutComponent';
import customMuiTheme from './customMuiTheme';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

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
    // const headerElement = <div>I am the header</div>;
    const footerElement = null;
    // const footerElement = <div>I am the footer</div>;
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
  children: React.PropTypes.element
};
