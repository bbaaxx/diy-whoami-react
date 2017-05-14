// @flow weak
/* eslint react/forbid-component-props: 0 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {createStyleSheet} from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Layout from 'material-ui/Layout';

const styleSheet = createStyleSheet('FullWidthLayout', theme => ({
  root: {
    flexGrow: 1,
    marginTop: 0,
    fontFamily: theme.fontFamily
  }
}));

export class AppLayoutComponent extends Component {
  render() {
    const classes = this.context.styleManager.render(styleSheet);
    return (
      <div className={classes.root}>
        <Layout container gutter={0}>
          {this.props.headerElement &&
            (<Layout item xs={12}>
              {this.props.headerElement}
            </Layout>)}
          {this.props.routerElement &&
            (<Layout item xs={12}>
              {this.props.routerElement}
            </Layout>)}
          {this.props.footerElement &&
            (<Layout item xs={12}>
              {this.props.footerElement}
            </Layout>)}
        </Layout>
      </div>
    );
  }
}

AppLayoutComponent.propTypes = {
  routerElement: PropTypes.element,
  headerElement: PropTypes.element,
  footerElement: PropTypes.element
};
AppLayoutComponent.contextTypes = {
  styleManager: customPropTypes.muiRequired
};
