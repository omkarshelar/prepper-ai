import React from 'react';
import { Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <footer id="footer">
      <Container>
        <Typography variant="body1" align="center">
          © 2024 Prepper AI. All Rights Reserved.
        </Typography>
        <Typography variant="body2" align="center">
          Contact us: support@prepper.ai
        </Typography>
      </Container>
    </footer>
  );
}
