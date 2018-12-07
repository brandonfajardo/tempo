import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import styles from './index.css';

class NavBar extends Component {
  render() {
    return (
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            <Link className={styles.logo} to="/">
              TempoGroups
            </Link>
          </Typography>
          <Typography variant="h6" color="inherit">
            <Link style={{ marginRight: '10px' }} className={styles.logo} to="/">
              <Button color="secondary" variant="contained">
                Groups
              </Button>
            </Link>
          </Typography>
          <Typography variant="h6" color="inherit">
            <Link className={styles.logo} to="/users">
              <Button color="secondary" variant="contained">
                Users
              </Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;