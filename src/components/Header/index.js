import React from 'react';
import PropTypes from 'prop-types';
import { Grid, AppBar, Toolbar, Icon } from '@material-ui/core';
import { compose, lifecycle, withStateHandlers, pure } from 'recompose';
import { pullIcon } from '../../icons';

const enhance = compose(
  withStateHandlers(
    ({ shape, color }) => ({
      shape,
      color,
    }),
    {
      updateIcon: () => ({ shape, color }) => ({
        shape,
        color,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      const { updateIcon } = this.props;
      pullIcon(0, updateIcon);
    },
  }),
);

const MyIcon = ({ shape, color }) => {
  return <Icon style={{ color }}>{shape}</Icon>;
};

MyIcon.propTypes = {
  shape: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

const PureIcon = pure(MyIcon);

export const EnhancedIcon = enhance(PureIcon);

const Header = ({ children }) => {
  const headerLeft = () => React.Children.toArray(children).find(child => child.type === HeaderLeft);
  const headerRight = () => React.Children.toArray(children).find(child => child.type === HeaderRight);
  const nav = () => React.Children.toArray(children).find(child => child.type === Nav);
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container direction="row" justify="space-between">
          <Grid item xs={6}>
            <Grid container direction="row">
              <Grid item>
                <EnhancedIcon shape="star" color="red" />
              </Grid>
              <Grid item> {headerLeft()}</Grid>
            </Grid>
          </Grid>
          <Grid item > 
            <Grid container direction="row">
            <Grid item >{headerRight()}</Grid>
            <Grid item>{nav()}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

const PureHeader = pure(Header);

export default PureHeader;

export const HeaderLeft = ({ children }) => <div>{children}</div>;

HeaderLeft.propTypes = {
  children: PropTypes.node.isRequired,
};

export const HeaderRight = ({ children }) => <div>{children}</div>;

HeaderRight.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Nav = ({ children }) => <div>{children}</div>;

Nav.propTypes = {
  children: PropTypes.node.isRequired,
};
