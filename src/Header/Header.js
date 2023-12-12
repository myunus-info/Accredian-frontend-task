import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AuthContext from '../contexts/auth-context';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const authCtx = useContext(AuthContext);

  const activeState = ({ isActive }) => {
    return {
      color: isActive ? '#fff' : 'lightgray',
      fontWeight: isActive ? '500' : '400',
      textDecoration: 'none',
    };
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none', fontWeight: '600' }}>
              Accredian
            </NavLink>
          </Typography>
          {!authCtx.isLoggedIn ? (
            <Button color="inherit">
              <NavLink to="/login" style={activeState}>
                Login
              </NavLink>
            </Button>
          ) : (
            <Button onClick={authCtx.logout} color="inherit">
              Logout
            </Button>
          )}

          <Button color="inherit">
            <NavLink to="/signup" style={activeState}>
              Signup
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
