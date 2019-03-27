import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { authorFullName } from '../../utils';

const styles = {
  status: {
    fontSize: '15px',
  },
  author: {
    marginLeft: '10px',
    marginBottom: '5px',
    fontWeight: 'lighter',
  },
};

const Footer = ({ status, authorId, people, classes }) => (
  <div>
    <div className={classes.container}>
      <Chip label={status} color="primary" className={classes.status} />
    </div>
    <Typography className={classes.author} noWrap>
      {authorFullName(people[authorId])}
    </Typography>
  </div>
);

Footer.propTypes = {
  status: PropTypes.string.isRequired,
  authorId: PropTypes.number.isRequired,
  people: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
