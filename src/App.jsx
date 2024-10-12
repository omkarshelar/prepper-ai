import React from 'react';
import { Container, AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-scroll';
import './App.css';
import Features from './components/Features';
import HeroSection from './components/HeroSection';
import MarketOpportunity from './components/MarketOpportunity';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <AppBar position="sticky" color="primary" className="navbar">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Prepper AI
          </Typography>
          <Button color="inherit">
            <Link to="features" spy={true} smooth={true} duration={500}>
              Features
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="market-opportunity" spy={true} smooth={true} duration={500}>
              Market
            </Link>
          </Button>
          <Button color="inherit">
            <Link to="footer" spy={true} smooth={true} duration={500}>
              Contact Us
            </Link>
          </Button>
        </Toolbar>
      </AppBar>

      {/* Landing Sections */}
      <HeroSection />
      <Container>
        <Box my={10} id="features">
          <Features />
        </Box>
        <Box my={10} id="market-opportunity">
          <MarketOpportunity />
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
