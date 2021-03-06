import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Drawer, List, ListItem, ListItemText, Avatar } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import firebase from '../firebase';
import { connect } from 'react-redux';
import { SET_SCROLL_INDEX } from '../reducers/library';

const styles = {
  root: {
    flexGrow: 1,
    position: 'fixed',
    zIndex: '42',
    width: '100%'
  },
  grow: {
    flexGrow: 1,
    cursor: 'pointer'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

  wuPrimaryColor: {
    backgroundColor: '#3B9979'
  },

};

class MenuAppBar extends React.Component {
  state = {
    left: false,
    anchorEl: null,
  };

  toggleDrawer = (open) => () => {
        this.setState({
        left: open,
        });
    };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleMyDecks = () => {
    this.props.history.push('/mydecks');
    this.handleClose();
  };

  handleSignOut = () => {
        this.handleClose();
        firebase.auth().signOut().then(() =>{
          this.props.history.push('/');
        }).catch(err => console.log(err));
    }

  handleSignIn = () => {
        this.props.history.push('/login');
        this.handleClose();
  }  

  handleProfile = () => {
      this.props.history.push('/profile');
      this.handleClose();
  }

  navigateHome = () => {
    this.props.history.push('/')
  }

  navigateToLibrary = () => {
      this.props.resetScrollIndex();
      this.props.history.push('/library');
  }

  render() {
    const { classes, history } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    const sideList = (
        <div className={classes.list}>
          <List component="nav">
            <ListItem button onClick={() => history.push('/deck/create')}>
                <ListItemText primary="Deck Builder" />
            </ListItem>
            <ListItem button onClick={this.navigateToLibrary}>
                <ListItemText primary={<div>Card Library<sup style={{ color: 'gray'}}>&alpha;</sup></div>} />
            </ListItem>
            <ListItem button onClick={() => history.push('/decks')}>
                <ListItemText primary="Decks" />
            </ListItem>
            <ListItem button onClick={() => history.push('/statistics')}>
                <ListItemText primary={<div>Statistics<sup style={{ color: 'gray'}}>&alpha;</sup></div>} />
            </ListItem>
            <ListItem button onClick={() => history.push('/feedback')}>
                <ListItemText primary="Feedback" />
            </ListItem>
            <ListItem button onClick={() => history.push('/about')}>
                <ListItemText primary="About" />
            </ListItem>
          </List>
        </div>
      );

    return (
      <div className={classes.root}>
        <AppBar position="fixed" classes={{colorPrimary: classes.wuPrimaryColor}}>
          <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
            <Typography variant="title" color="inherit" className={classes.grow} onClick={this.navigateHome}>
                { document.title }
            </Typography>
            {this.props.isAuth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <Avatar src={this.props.avatar} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleProfile}>Profile</MenuItem>
                  <MenuItem onClick={this.handleMyDecks}>My decks</MenuItem>
                  <MenuItem onClick={this.handleSignOut}>Sign out</MenuItem>
                </Menu>
              </div>
            )}
            {
                !this.props.isAuth && (
                    <div>
                    <IconButton
                      aria-owns={open ? 'menu-appbar' : null}
                      aria-haspopup="true"
                      onClick={this.handleMenu}
                      color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={this.handleClose}
                    >
                      <MenuItem onClick={this.handleSignIn}>Sign in</MenuItem>
                    </Menu>
                  </div>
                    )
            }
          </Toolbar>
        </AppBar>
        <div>
              <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
              <div
                  tabIndex={0}
                  role="button"
                  onClick={this.toggleDrawer(false)}
                  onKeyDown={this.toggleDrawer(false)}
              >
                  {sideList}
              </div>
              </Drawer>
          </div>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    return {
        isAuth: state.auth !== null,
        avatar: state.auth !== null ? state.auth.avatar : null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignOut: () => dispatch({type: 'CLEAR_USER'}),
        resetScrollIndex: () => dispatch({ type: SET_SCROLL_INDEX, payload: 0 })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(MenuAppBar)));