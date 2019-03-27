import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { mergeWithSpace, initials } from '../../utils';

const styles = {
  avatar: {
    backgroundColor: 'orange',
  },
};

const Header = ({ firstname, lastname, phoneNumber, email, classes }) => (
  <CardHeader
    avatar={<Avatar className={classes.avatar}>{initials(firstname, lastname)}</Avatar>}
    action={
      <IconButton>
        <MoreVertIcon />
      </IconButton>
    }
    title={mergeWithSpace(firstname, lastname)}
    subheader={mergeWithSpace(phoneNumber, email)}
  />
);

Header.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
