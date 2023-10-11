// Project.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';

function Project({ description, projectLink }) {
  return (
    <Card sx={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="body1" gutterBottom>
          {description}
        </Typography>
        <Box mt={1}>
          <Link href={projectLink} target="_blank" rel="noopener noreferrer">
            View Project
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
}

export default Project;
