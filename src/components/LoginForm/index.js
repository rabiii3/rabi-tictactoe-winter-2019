import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Grid, FormControl, Input, InputLabel, Typography, Button } from '@material-ui/core';

const styles = {
  bord: {
    width: 350,
  },
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePW = this.handlePW.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePW(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.onAuth(email);
    console.log('ussssssser', email);
    //alert('Email: ' + this.state.email + '\nPassword: ' +this.state.password);
  }

  verifyEmail = () => {
    const email = /\S+@\S+\.\S+/;
    return !email.test(this.state.email);
  };

  verifyPW = () => {
    return this.state.password.length > 7 ? false : true;
  };

  render() {
    const { classes } = this.props;
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
              <form onSubmit={this.handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel>Email</InputLabel>
                  <Input type="text" value={this.state.email} onChange={this.handleEmail} />
                </FormControl>

                <FormControl margin="normal" required fullWidth>
                  <InputLabel>Password</InputLabel>
                  <Input type="password" value={this.state.password} onChange={this.handlePW} />
                </FormControl>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={this.verifyEmail() || this.verifyPW()}
                >
                  Log in
                </Button>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onAuth: PropTypes.func.isRequired,
};

export default withStyles(styles)(LoginForm);
