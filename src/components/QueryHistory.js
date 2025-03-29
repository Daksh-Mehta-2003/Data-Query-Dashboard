import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { setCurrentQuery } from '../store/querySlice';

const QueryHistory = () => {
  const dispatch = useDispatch();
  const { queryHistory } = useSelector((state) => state.query);

  const handleQueryClick = (query) => {
    dispatch(setCurrentQuery(query));
  };

  if (queryHistory.length === 0) {
    return null;
  }

  return (
    <Paper 
      elevation={2} 
      style={{ 
        padding: '16px',
        marginTop: '20px',
        maxWidth: 800,
        margin: '20px auto'
      }}
    >
      <Typography variant="h6" gutterBottom>
        Recent Queries
      </Typography>
      <List>
        {queryHistory.map((query, index) => (
          <ListItem 
            key={index} 
            button 
            onClick={() => handleQueryClick(query)}
            style={{
              borderRadius: '4px',
              marginBottom: '4px',
              backgroundColor: '#f5f5f5'
            }}
          >
            <ListItemText 
              primary={query}
              secondary={`Query ${queryHistory.length - index}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default QueryHistory; 