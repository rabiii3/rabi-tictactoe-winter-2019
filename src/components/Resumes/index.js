import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import User from '../User';

const Resumes = ({ resumes, people }) => (
  <Grid container justify="space-around">
    {resumes.map(resume => (
      <Grid item key={resume.id}>
        <User resume={resume} people={people} />
      </Grid>
    ))}
  </Grid>
);

Resumes.propTypes = {
  resumes: PropTypes.array.isRequired,
  people: PropTypes.object.isRequired,
};

export default Resumes;
