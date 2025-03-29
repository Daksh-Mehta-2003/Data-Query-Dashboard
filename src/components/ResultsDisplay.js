import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography, CircularProgress } from '@mui/material';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const ResultsDisplay = () => {
  const { results, isLoading, error } = useSelector((state) => state.query);

  if (isLoading) {
    return (
      <Paper style={{ padding: '32px', textAlign: 'center', maxWidth: 800, margin: '20px auto' }}>
        <CircularProgress />
      </Paper>
    );
  }

  if (error) {
    return (
      <Paper style={{ padding: '32px', textAlign: 'center', maxWidth: 800, margin: '20px auto' }}>
        <Typography color="error">{error}</Typography>
      </Paper>
    );
  }

  if (!results) {
    return null;
  }

  const renderChart = () => {
    switch (results.type) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={results.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" label={{ value: results.xAxis, position: 'bottom' }} />
              <YAxis label={{ value: results.yAxis, angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'bar':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={results.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" label={{ value: results.xAxis, position: 'bottom' }} />
              <YAxis label={{ value: results.yAxis, angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        );

      case 'pie':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={results.data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );

      default:
        return null;
    }
  };

  return (
    <Paper style={{ padding: '24px', maxWidth: 800, margin: '20px auto' }}>
      <Typography variant="h5" gutterBottom align="center">
        {results.title}
      </Typography>
      {renderChart()}
    </Paper>
  );
};

export default ResultsDisplay; 