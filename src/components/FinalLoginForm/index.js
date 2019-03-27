import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { withStyles, Grid, FormControl, Input, InputLabel, Typography, Button } from '@material-ui/core';

const styles = {
  bord: {
    width: 350,
  },
};

const validate = values => {
  const errors = {};
  const email = /\S+@\S+\.\S+/;
  if (!values.email) {
    errors.email = 'Email is required.';
  }
  if (!email.test(values.email)) {
    errors.email = 'Email must be valid.';
  }
  //if(values.password.length < 7){errors.password = 'Password length must be greater than 7.'}
  return errors;
};

//password & validate email and pw

const FinalLoginForm = ({ onAuth, classes }) => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <Grid container direction="column" className={classes.bord}>
          <Grid item>
            <Typography component="h1" variant="h5">
              Login Form
            </Typography>
          </Grid>
          <Grid item>
            <Form
              onSubmit={({ email }) => onAuth({ email })}
              validate={validate}
              render={({ handleSubmit, reset, valid, pristine }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="email"
                    component={({ input: { name, onChange, value, ...restInput }, meta, ...rest }) => (
                      <FormControl margin="normal" required fullWidth>
                        <InputLabel>
                          {rest.label} {meta.error && meta.touched ? 'error' : ''}
                        </InputLabel>
                        <Input autoFocus name={name} type="text" value={value} onChange={onChange} />
                      </FormControl>
                    )}
                    label="Email"
                    type="text"
                  />

                  <Field
                    name="password"
                    component={({ input: { name, onChange, value, ...restInput }, meta, ...rest }) => (
                      <FormControl margin="normal" required fullWidth>
                        <InputLabel>
                          {rest.label} {meta.error && meta.touched ? 'error' : ''}
                        </InputLabel>
                        <Input name={name} type="password" value={value} onChange={onChange} />
                      </FormControl>
                    )}
                    label="Password"
                    type="password"
                  />

                  <Button type="submit" fullWidth variant="contained" color="primary" disabled={!valid}>
                    Log in
                  </Button>
                  <Button
                    type="button"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={pristine}
                    onClick={reset}
                  >
                    RESET
                  </Button>
                </form>
              )}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

FinalLoginForm.propTypes = {
  onAuth: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FinalLoginForm);
