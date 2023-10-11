import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function LeftBar() {

  // Sample functions that can be executed when the buttons are clicked
  const handleButton1Click = async () => {
    console.log('Button 1 clicked');
    window.location.href = 'https://www.linkedin.com/in/shelger-zhang';
  };

  const handleButton2Click = () => {
    console.log('Button 2 clicked');
    window.location.href = 'https://github.com/Shelger';
  };

  const handleButton3Click = () => {
    console.log('Button 3 clicked');
  };

  const handleButton4Click = () => {
    console.log('Button 4 clicked');
  };

  return (
    <Paper elevation={3} 
        sx={{ 
            width: '250px', 
            padding: '20px',
            position: 'fixed', 
            height: '100vh', 
            top: 0, 
            left: 0, 
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'  
    }}>
        <div>
            <Typography variant="h2" mb={3} align="center">
                Aloha!
            </Typography>
            <Box display="flex" flexDirection="column" gap="20px" mt="50%" flexGrow={1}>

                <Button variant="outlined" color="primary" onClick={handleButton1Click}>
                  LinkedIn
                </Button>

                <Button variant="outlined" color="primary" onClick={handleButton2Click}>
                  Github
                </Button>

                <Button variant="outlined" color="primary" onClick={handleButton3Click}>
                  Rewards
                </Button>

                <Button variant="outlined" color="secondary" onClick={handleButton4Click}>
                  Fishing
                </Button>
            </Box>
        </div>
      
        <Typography variant="body2" align="center" mt="auto" mb={2}>
            © {new Date().getFullYear()} Shelger
        </Typography>
    </Paper>
  );
}

export default LeftBar;
