import React from 'react';
import Project from './project.js';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function ProjectsList() {
  const projects = [
    {
      description: 'This is project 1. It does amazing things!',
      link: 'https://project1.example.com'
    },
    {
      description: 'Project 2 is even cooler. Check it out!',
      link: 'https://project2.example.com'
    },
    // ... Add more projects as needed
  ];

  return (
    <Box sx={{ padding: '20px' }}>
        <Box display="flex" flexDirection="column" flexGrow={1} ml={2}>
          <Box display="flex" gap="10px" mt={1}>
            <Button color="inherit" variant="outlined">Filter 1</Button>
            <Button color="inherit" variant="outlined">Filter 2</Button>
            <Button color="inherit" variant="outlined">Filter 3</Button>
          </Box>
        </Box>
        {projects.map((project, index) => (
            <Project 
            key={index}
            description={project.description}
            projectLink={project.link}
            />
        ))}
    </Box>
  );
}

export default ProjectsList;
