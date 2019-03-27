import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const styles = {
  card: {
    marginTop: '12px',
    width: '300px',
    transition: '0.3s',
    '&:hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
    },
  },
};

const User = ({ resume, people, classes }) => {
  const data = { ...resume, people };
  return (
    <Card className={classes.card}>
      <Grid container direction="column">
        <Grid item>
          <Header {...resume} />
        </Grid>
        <Grid item>
          <Content {...resume} />
        </Grid>
        <Grid item>
          <Footer {...data} />
        </Grid>
      </Grid>
    </Card>
  );
};

User.PropType = {
  resumes: PropTypes.array.isRequired,
  people: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(User);
