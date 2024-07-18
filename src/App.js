import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';
import AttendancePerformanceChart from './components/AttendancePerformanceChart';
import EducationalStreamPieChart from './components/EducationalStreamPieChart';
import ScholarshipStatusBarChart from './components/ScholarshipStatusBarChart';
import { studentData, streamData, scholarshipData } from './data';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Typography variant="h4" gutterBottom>Student Tracking Dashboard</Typography>
      <Grid container spacing={3}>
        {/* Attendance and Performance Line Charts */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>Student Attendance and Performance</Typography>
            <AttendancePerformanceChart data={studentData} />
          </Paper>
        </Grid>

        {/* Educational Stream Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>Distribution of Educational Streams</Typography>
            <EducationalStreamPieChart data={streamData} />
          </Paper>
        </Grid>

        {/* Scholarship Status Bar Chart */}
        <Grid item xs={12}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>Scholarship Status Over the Past 5 Years</Typography>
            <ScholarshipStatusBarChart data={scholarshipData} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
