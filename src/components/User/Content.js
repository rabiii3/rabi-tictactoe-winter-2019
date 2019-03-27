import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

const styles = {
  content: {
    marginLeft: '10px',
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  skill: {
    marginTop: '5px',
    marginRight: '5px',
  },
};

const Content = ({ skills, classes }) => (
  <CardContent>
    {skills.map((skill, i) => (
      <Chip className={classes.skill} label={skill} variant="outlined" color="primary" key={i} />
    ))}
  </CardContent>
);

Content.propTypes = {
  skills: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
