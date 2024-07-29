import React from 'react';
import { Box, Typography, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useNavigate } from 'react-router-dom';

// Dummy data for charts and table
const lineChartData = [
  { name: 'Jan', users: 400 },
  { name: 'Feb', users: 300 },
  { name: 'Mar', users: 200 },
  { name: 'Apr', users: 278 },
  { name: 'May', users: 189 },
  { name: 'Jun', users: 239 },
  { name: 'Jul', users: 349 },
];

const barChartData = [
  { name: 'Speech Practices', value: 4000 },
  { name: 'Words Counted', value: 3000 },
  { name: 'Minutes Logged', value: 2000 },
  { name: 'Sessions Completed', value: 2780 },
];

const pieChartData = [
  { name: 'Completed', value: 4000 },
  { name: 'In Progress', value: 3000 },
  { name: 'Pending', value: 2000 },
];

const tableData = [
  { id: 1, user: 'John Doe', activity: 'Speech Practice', duration: '30 mins' },
  { id: 2, user: 'Jane Smith', activity: 'Speech Practice', duration: '45 mins' },
  { id: 3, user: 'Alice Johnson', activity: 'Speech Practice', duration: '50 mins' },
  { id: 4, user: 'Bob Brown', activity: 'Speech Practice', duration: '35 mins' },
];

function AdminDashboard() {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    navigate('/');
  };

  return (
    <Container maxWidth="xl" sx={{ padding: 3 }}>
      <Box sx={{ textAlign: 'center', marginBottom: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ color: '#333' }}>
          Admin Dashboard
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
              Monthly Active Users
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
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
            </LineChart>
          </Paper>
        </Grid>

        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Activity Summary
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
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </Paper>
        </Grid>

        {/* Pie Chart */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h6" component="h2" gutterBottom sx={{ marginBottom: 2, color: '#555' }}>
              Session Status
            </Typography>
            <PieChart width={500} height={300}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#8884d8" : "#82ca9d"} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
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
                    <TableCell>User</TableCell>
                    <TableCell>Activity</TableCell>
                    <TableCell>Duration</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tableData.map((entry) => (
                    <TableRow key={entry.id}>
                      <TableCell>{entry.id}</TableCell>
                      <TableCell>{entry.user}</TableCell>
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

export default AdminDashboard;
