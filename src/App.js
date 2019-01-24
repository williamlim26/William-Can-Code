import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Grid from '@material-ui/core/Grid';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const styles = theme => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none"
  },
  navRef: {
    fontWeight: "900",
    '&:hover' : {
      textDecoration: "underline",
    }
  },
  navIcon: {
    color: "white",
  },
  App: {
    textAlign: "center",
  },
  landingImg: {
    height:"100vh",
    background:' url("images/landing.jpg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "aliceblue"
  },
  logo: {
    height: "100%",
    width: "auto",
  },
  layer: {
    backgroundColor: "rgb(3,3,3,0.6)",
    height: "100vh",
  }
  
})

class App extends Component {

  state = {
    open: false
  }

  handleDrawerOpen = () => {
    this.setState({ open : true})
  }

  handleDrawerClose = () => {
    this.setState({ open : false})
  }

  render() {
    const {classes, width} = this.props
    return (
      <div className={classes.App}>
        <div className={classes.landingImg}>
          <div className={classes.layer}>
            <AppBar position="absolute" className={classes.appBar}>
              {
                isWidthUp('sm', width)
                ? <Grid container spacing={32} justify="space-evenly" style={{margin: "0"}}>
                    <Grid item className={classes.navRef}>About</Grid>
                    <Grid item className={classes.navRef}>Projects</Grid>
                    <Grid item className={classes.navRef}><a href="#"><WhatshotIcon style={{color : "white"}}/></a></Grid>
                    <Grid item className={classes.navRef}>Blog</Grid>
                    <Grid item className={classes.navRef}>Contact Me</Grid>
                  </Grid>
                :
                  <Toolbar>
                    <IconButton onClick={this.handleDrawerOpen} className={classes.navIcon}>
                      <MenuIcon/>
                    </IconButton>
                  </Toolbar>
              }
            </AppBar>
            <Drawer open={this.state.open} onClose={this.handleDrawerClose}>
              <List>
                <ListItem>
                  About
                </ListItem>
                <ListItem>
                  Projects
                </ListItem>
                <ListItem>
                  Contact Me
                </ListItem>
              </List>
            </Drawer>
          </div>

        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withWidth()(withStyles(styles)(App));
