// @flow weak
/* eslint react/forbid-component-props: 0 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {createStyleSheet} from 'jss-theme-reactor';
import customPropTypes from 'material-ui/utils/customPropTypes';
import Grid from 'material-ui/Grid';

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
        <Grid container gutter={0}>
          {this.props.headerElement &&
            (<Grid item xs={12}>
              {this.props.headerElement}
            </Grid>)}
          {this.props.routerElement &&
            (<Grid item xs={12}>
              {this.props.routerElement}
            </Grid>)}
          {this.props.footerElement &&
            (<Grid item xs={12}>
              {this.props.footerElement}
            </Grid>)}
        </Grid>
      </div>
    );
  }
}

AppLayoutComponent.propTypes = {
  routerElement: PropTypes.element.isRequired,
  headerElement: PropTypes.element.isRequired,
  footerElement: PropTypes.element.isRequired
};
AppLayoutComponent.contextTypes = {
  styleManager: customPropTypes.muiRequired
};
