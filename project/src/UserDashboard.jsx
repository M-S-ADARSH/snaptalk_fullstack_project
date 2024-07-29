import React from 'react';
import { Box, Typography, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts';
import { useNavigate } from 'react-router-dom';

// Dummy data for charts and table
const lineChartData = [
  { name: 'Mon', duration: 30 },
  { name: 'Tue', duration: 45 },
  { name: 'Wed', duration: 50 },
  { name: 'Thu', duration: 35 },
  { name: 'Fri', duration: 60 },
];

const barChartData = [
  { name: 'Mon', words: 100 },
  { name: 'Tue', words: 200 },
  { name: 'Wed', words: 150 },
  { name: 'Thu', words: 180 },
  { name: 'Fri', words: 220 },
];

const tableData = [
  { id: 1, date: '2024-07-22', activity: 'Speech Practice', duration: '30 mins' },
  { id: 2, date: '2024-07-23', activity: 'Speech Practice', duration: '45 mins' },
  { id: 3, date: '2024-07-24', activity: 'Speech Practice', duration: '50 mins' },
  { id: 4, date: '2024-07-25', activity: 'Speech Practice', duration: '35 mins' },
  { id: 5, date: '2024-07-26', activity: 'Speech Practice', duration: '60 mins' },
];

function UserDashboard() {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="xl" sx={{ padding: 3 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333' }}>
          User Dashboard
        </Typography>
        <Button variant="contained" color="primary" onClick={handleHomeRedirect} sx={{ marginBottom: 3 }}>
          Home
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Daily Speech Duration
            </Typography>
            <LineChart
              width={500}
              height={300}
              data={lineChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="duration" stroke="#8884d8" />
            </LineChart>
          </Paper>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Words Spoken Per Day
            </Typography>
            <BarChart
              width={500}
              height={300}
              data={barChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="words" fill="#82ca9d" />
            </BarChart>
          </Paper>
        </Grid>

        {/* Table */}
        <Grid item xs={12}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Recent Activities
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Activity</TableCell>
                    <TableCell>Duration</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell>{entry.id}</TableCell>
                      <TableCell>{entry.date}</TableCell>
                      <TableCell>{entry.activity}</TableCell>
                      <TableCell>{entry.duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default UserDashboard;
