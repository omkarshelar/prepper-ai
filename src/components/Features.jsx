import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { MdAssignment, MdSchool, MdPeople } from 'react-icons/md';

export default function Features() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Key Features
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {/* Feature 1: Resume Analysis */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <MdAssignment size={50} color="#1976d2" />
              <Typography variant="h5" component="div" gutterBottom>
                Resume Analysis
              </Typography>
              <Typography>
                Optimize your resume and cover letter for every job application using ATS insights.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Feature 2: Skill Gap Analysis */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <MdSchool size={50} color="#1976d2" />
              <Typography variant="h5" component="div" gutterBottom>
                Skill Gap Analysis
              </Typography>
              <Typography>
                Identify and fill missing skills with personalized course recommendations from your university and other online resources.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Feature 3: Mock Interviews */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <MdPeople size={50} color="#1976d2" />
              <Typography variant="h5" component="div" gutterBottom>
                Mock Interviews
              </Typography>
              <Typography>
                Ace coding and system design interviews by taking mocks with our AI
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
