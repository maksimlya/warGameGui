import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
    textField: {
        marginRight: 20,
        width: 150,
    },
    menu: {
        width: 100,
    },
    button: {
        width: 150,
    },
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

const hideOptions = [
    {
        value: 'true',
        label: 'True',
    },
    {
        value: 'false',
        label: 'False',
    },
];
const destructorOptions = [
    {
        value: 'ship',
        label: 'Ship',
    },
    {
        value: 'plane',
        label: 'Plane',
    },
];

class App extends Component {
    state = {
        launcherId: 'L101',
        destructorId: 'LD201',
        missileDestructorId: 'D201',
        isHidden: 'True',
        type: 'Ship'
    };
    handleChange = id => event => {
        this.setState({
            [id]: event.target.value,
        });
    };



    render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Afeka-War-Game Console</h1>
        </header>
                    <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Add Missile Launcher</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <Typography>
                      <form className={classes.container} method="post" action="http://localhost:4567/addMissileLauncher" target="hiddenFrame" noValidate autoComplete="off">
                          <TextField
                              name="id"
                              id="name"
                              label="Launcher ID"
                              className={classes.textField}
                              value={this.state.launcherId}
                              onChange={this.handleChange('launcherId')}
                              margin="normal"
                          />

                          <TextField
                              name="isHidden"
                              id="isHidden"
                              select
                              label="Is Hidden?"
                              className={classes.textField}
                              value={this.state.isHidden}
                              onChange={this.handleChange('isHidden')}
                              SelectProps={{
                                  native: true,
                                  MenuProps: {
                                      className: classes.menu,
                                  },
                              }}
                              margin="normal"
                          >
                              {hideOptions.map(option => (
                                  <option key={option.value} value={option.value}>
                                      {option.label}
                                  </option>
                              ))}
                          </TextField>
                          <Button
                              variant="contained"
                              type="submit"
                              color="primary"
                              className={classes.button}>
                              Add Missile Launcher
                          </Button>
                      </form>
                  </Typography>
              </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Add Missile Launcher Destructor</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <Typography>
                      <form className={classes.container} method="post" action="http://localhost:4567/addLauncherDestructor" target="hiddenFrame" noValidate autoComplete="off">
                          <TextField
                              name="id"
                              id="name"
                              label="Destructor ID"
                              className={classes.textField}
                              value={this.state.destructorId}
                              onChange={this.handleChange('destructorId')}
                              margin="normal"
                          />

                          <TextField
                              name="type"
                              id="type"
                              select
                              label="Destructor type"
                              className={classes.textField}
                              value={this.state.type}
                              onChange={this.handleChange('type')}
                              SelectProps={{
                                  native: true,
                                  MenuProps: {
                                      className: classes.menu,
                                  },
                              }}
                              margin="normal"
                          >
                              {destructorOptions.map(option => (
                                  <option key={option.value} value={option.value}>
                                      {option.label}
                                  </option>
                              ))}
                          </TextField>
                          <Button variant="contained" type="submit" color="primary"  className={classes.button}>
                              Add Launcher Destructor
                          </Button>
                      </form>
                  </Typography>
              </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.heading}>Add Missile Destructor</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <Typography>
                      <form className={classes.container} method="post" action="http://localhost:4567/addMissileDestructor" target="hiddenFrame" noValidate autoComplete="off">
                          <TextField
                              name="id"
                              id="name"
                              label="Missile Destructor ID"
                              className={classes.textField}
                              value={this.state.missileDestructorId}
                              onChange={this.handleChange('missileDestructorId')}
                              margin="normal"
                          />
                          <Button
                              variant="contained"
                              type="submit"
                              color="primary"
                              className={classes.button}>
                              Add Missile Destructor
                          </Button>
                      </form>
                  </Typography>
              </ExpansionPanelDetails>
          </ExpansionPanel>
          <iframe name="hiddenFrame" className="hide">a</iframe>
      </div>

    );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

//export default App;
export default withStyles(styles)(App);
