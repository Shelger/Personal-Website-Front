import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TopBar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton edge="start" color="inherit" aria-label="logo">
          {/* Replace with your logo */}
          <Typography variant="h6">Logo</Typography>
        </IconButton>

        {/* Adding some spacing between the logo and contact link */}
        <Box sx={{ marginLeft: '20px' }}>
          <Typography>
            <a href="mailto:shelgerz@Gmail.com" style={{ color: 'white', textDecoration: 'none' }}>
              Contact Me
            </a>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
