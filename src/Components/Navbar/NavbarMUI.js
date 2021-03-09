import React from 'react';
import clsx from 'clsx';
import { Route, Switch  } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import PeopleIcon from '@material-ui/icons/People';
import ToolbarMenu from "../ToolbarMenu/ToolbarMenu";
import Badge from '@material-ui/core/Badge';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import User from '../User/User'; 
import UserProfile from '../UserProfile/UserProfile'; 
import Item1 from '../Item1/Item1'; 
import Item2 from '../Item2/Item2'; 
import Item3 from '../Item3/Item3'; 
import Login from '../Login/Login';
import NewUser from '../NewUser/NewUser';
import ChangeUser from '../ChangeUser/ChangeUser';
import AllUsers from '../AllUsers/AllUsers';
import InputField from '../InputField/InputField';
import { useHistory } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  appBar: {
    backgroundColor: '#b0bec5',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hover: {
    cursor: 'pointer',
    borderRadius: '50%',
    '&:hover': {
        backgroundColor: "#90a4ae"
      }
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  flex: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  addMenu: {
    width: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cursor: {
    cursor: 'pointer',
    '&:hover': {
      color: '#78909c'
    }
  },
  
  chevron: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  }, 
  toolbar: {
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'center',
    height: '100%',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    height: '100%'
  },
}));

export default function NavbarMUI(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  console.log('Navbar state =>', props.store.getState())
  const store = props.store
  const history = useHistory();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <MenuIcon onClick={handleDrawerOpen} aria-label="open drawer" edge="start" className={clsx(classes.menuButton, classes.hover, {
              [classes.hide]: open,
            })}/>
          <div className={classes.flex}>
          <Typography className={classes.cursor} variant="h6" noWrap>
            Cyfral
          </Typography>
          <div className={classes.addMenu}>
            <NotificationsActiveIcon className={classes.cursor}/>
            <MailIcon className={classes.cursor}/>
            <ToolbarMenu className={classes.cursor}/>
          </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.chevron}>
            {theme.direction === 'rtl' ? <ChevronRightIcon className={classes.hover} onClick={handleDrawerClose}/> : <ChevronLeftIcon className={classes.hover} onClick={handleDrawerClose}/>}
        </div>
        <Divider />
        <List>
           
            <ListItem button onClick={() => history.push(`/userProfile/1`) }>
              <ListItemIcon><AccountBoxIcon /></ListItemIcon>
              <ListItemText secondary='User Profile' />
            </ListItem>
            <ListItem button onClick={() => history.push(`/allUsers`) }>
              <ListItemIcon><PeopleIcon /></ListItemIcon>
              <ListItemText secondary='All Users' />
            </ListItem>
            <ListItem button onClick={() => history.push(`/item1`) }>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText secondary='Item 1' />
            </ListItem>
            <ListItem button onClick={() => history.push(`/item2`) }>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText secondary='Item 2' />
            </ListItem>
            <ListItem button onClick={() => history.push(`/item3`) }>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText secondary='Item 3' />
            </ListItem>
          
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText secondary={text}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}>
            <Switch>
            <Route exact path='/logOut' render={ () => <Login store={store}/> } />
            <Route path='/userProfile/:id' render={ () => <UserProfile store={store} /> } />
            <Route path='/changeUserProfile' render={ () => <ChangeUser store={store}/> } />
            <Route path='/newUser' render={() => <NewUser store={store}/>} />
            <Route path='/item1' render={ () => <Item1 store={store}/> } />
            <Route path='/item2' render={ () => <Item2 store={store}/> } />
            <Route path='/item3' render={ () => <Item3 store={store}/> } />
            <Route path='/allUsers' render={ () => <AllUsers store={store}/> } />
            <Route path='/inputField' render={ () => <InputField store={store}/> } />
            <Route path='/loginUser/:id' render={ () => <User store={store} /> } />
            </Switch>
        </div>
      </main>
    </div>
  );
}
