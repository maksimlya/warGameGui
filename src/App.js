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
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import axios from 'axios';

//const address = "http://localhost:4567";
const address = "http://milky.ddns.net:4567";

const styles = theme => ({
    textField: {
        marginRight: 10,
        width: 170,
    },
    menu: {
        width: 100,
    },
    button: {
        width: 150,
    },
       heading: {
        fontWeight: theme.typography.fontWeighBold,
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

const hideOptions = [
    {
        value: 'false',
        label: 'False',
    },
    {
        value: 'true',
        label: 'True',
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

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}
TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};


class App extends Component {
 launcherId = 101;
 launcherDestructorId = 201;
 missileDestructorId = 301;
 missileId = 1;
    state = {
        launcherId: 'L' + this.launcherId,
        destructorId: 'LD' + this.launcherDestructorId,
        missileDestructorId: 'D' + this.missileDestructorId,
        missileId: 'M' + this.missileId,
        damage: '1500',
        destination: 'Beer-Sheva',
        flyTime: '12',
        isHidden: 'False',
        type: 'Ship',
        value: 0,
        msg: 'Hello',
    };

    handleTabChange = (event, value) => {
        this.setState({ value });
        this.getStatistics();
    };

    handleChange = id => event => {
        this.setState({
            [id]: event.target.value,
        });
    };


    getStatistics(){
        axios.get("http://localhost:4567/statistics").then(response => {
            console.log(response);
        });
         //
       // });


    }



    render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Afeka-War-Game Console</h1>
        </header>

          <AppBar position="static">
              <Tabs value={value} onChange={this.handleTabChange}>
                  <Tab label="Add Vehicles" />
                  <Tab label="Launch Commands" />
                  <Tab label="Statistics" href="#basic-tabs" />
              </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>
              <ExpansionPanel>
                  <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>Add Missile Launcher</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                      <Typography>
                          <form className={classes.container} method="post" action={address + "/addMissileLauncher"} target="hiddenFrame" noValidate autoComplete="off">
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
                          <form className={classes.container} method="post" action={address + "/addLauncherDestructor"} target="hiddenFrame" noValidate autoComplete="off">
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
                          <form className={classes.container} method="post" action={address +  "/addMissileDestructor"} target="hiddenFrame" noValidate autoComplete="off">
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

          </TabContainer>}
          {value === 1 && <TabContainer>
              <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>Launch Missile</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                      <Typography>
                          <form className={classes.container} method="post" action={address +  "/launchMissile"} target="hiddenFrame" noValidate autoComplete="off">
                              <TextField
                                  name="launcherId"
                                  id="name"
                                  label="Missile Launcher ID"
                                  className={classes.textField}
                                  value={this.state.launcherId}
                                  onChange={this.handleChange('launcherId')}
                                  margin="normal"
                              />
                              <TextField
                                  name="missileId"
                                  id="name"
                                  label="Missile ID"
                                  className={classes.textField}
                                  value={this.state.missileId}
                                  onChange={this.handleChange('missileId')}
                                  margin="normal"
                              />
                              <TextField
                                  name="damage"
                                  id="name"
                                  label="Potential Damage"
                                  className={classes.textField}
                                  value={this.state.damage}
                                  onChange={this.handleChange('damage')}
                                  margin="normal"
                              />
                              <TextField
                                  name="destination"
                                  id="name"
                                  label="Destination"
                                  className={classes.textField}
                                  value={this.state.destination}
                                  onChange={this.handleChange('destination')}
                                  margin="normal"
                              />
                              <TextField
                                  name="flyTime"
                                  id="name"
                                  label="Fly Time"
                                  className={classes.textField}
                                  value={this.state.flyTime}
                                  onChange={this.handleChange('flyTime')}
                                  margin="normal"
                              />
                              <Button
                                  variant="contained"
                                  type="submit"
                                  color="primary"
                                  className={classes.button}>
                                  Launch Missile
                              </Button>
                          </form>
                      </Typography>
                  </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>Attempt to destroy Missile</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                      <Typography>
                          <form className={classes.container} method="post" action={address +  "/destructMissile"} target="hiddenFrame" noValidate autoComplete="off">
                              <TextField
                                  name="missileId"
                                  id="name"
                                  label="Missile ID"
                                  className={classes.textField}
                                  value={this.state.missileId}
                                  onChange={this.handleChange('missileId')}
                                  margin="normal"
                              />
                              <TextField
                                  name="destructorId"
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
                                  Destroy Missile
                              </Button>
                          </form>
                      </Typography>
                  </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>Destroy Missile Launcher</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                      <Typography>
                          <form className={classes.container} method="post" action={address +  "/destructLauncher"} target="hiddenFrame" noValidate autoComplete="off">
                              <TextField
                                  name="launcherId"
                                  id="name"
                                  label="Launcher ID"
                                  className={classes.textField}
                                  value={this.state.launcherId}
                                  onChange={this.handleChange('launcherId')}
                                  margin="normal"
                              />
                              <TextField
                                  name="destructorId"
                                  id="name"
                                  label="Launcher Destructor ID"
                                  className={classes.textField}
                                  value={this.state.destructorId}
                                  onChange={this.handleChange('destructorId')}
                                  margin="normal"
                              />
                              <Button
                                  variant="contained"
                                  type="submit"
                                  color="primary"
                                  className={classes.button}>
                                  Destroy Missile Launcher
                              </Button>
                          </form>
                      </Typography>
                  </ExpansionPanelDetails>
              </ExpansionPanel>
          </TabContainer>}
          {value === 2 && <TabContainer>
              <ExpansionPanel>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography className={classes.heading}>{this.state.msg}</Typography>
                  </ExpansionPanelSummary>
              </ExpansionPanel>

          </TabContainer>}

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
