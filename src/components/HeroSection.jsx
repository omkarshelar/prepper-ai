import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { Link } from 'react-scroll';

export default function HeroSection() {
  return (
    <div className="hero-section">
      <Typography variant="h1" component="h1" gutterBottom>
        Prepper: Your AI Job Assistant
      </Typography>
      <Typography variant="h5" component="p">
        Navigate today's competitive job market with AI-powered insights.
      </Typography>
      <Box mt={5}>
        <Button variant="contained" color="secondary" size="large">
          <Link to="features" spy={true} smooth={true} duration={500} style={{ color: 'white', textDecoration: 'none' }}>
            Explore Features
          </Link>
        </Button>
      </Box>
    </div>
  );
}
