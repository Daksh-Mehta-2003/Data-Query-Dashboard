import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Paper, List, ListItem, ListItemText, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { setCurrentQuery, addToHistory, setLoading, setResults, setError } from '../store/querySlice';
import { processQuery } from '../utils/mockData';

const QueryInput = () => {
  const dispatch = useDispatch();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { currentQuery, suggestions } = useSelector((state) => state.query);

  const handleQuerySubmit = async () => {
    if (!currentQuery.trim()) return;

    dispatch(setLoading(true));
    dispatch(addToHistory(currentQuery));

    try {
      const results = await processQuery(currentQuery);
      dispatch(setResults(results));
    } catch (error) {
      dispatch(setError('Failed to process query'));
    } finally {
      dispatch(setLoading(false));
      dispatch(setCurrentQuery(''));
    }
  };

  const handleSuggestionClick = (suggestion) => {
    dispatch(setCurrentQuery(suggestion));
    setShowSuggestions(false);
  };

  return (
    <div className="query-input-container" style={{ position: 'relative', width: '100%', maxWidth: 800, margin: '0 auto' }}>
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.9)',
        padding: '8px 16px',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
      }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ask your business question..."
          value={currentQuery}
          onChange={(e) => {
            dispatch(setCurrentQuery(e.target.value));
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          className="query-input"
          InputProps={{
            style: {
              fontSize: '1.1rem',
              padding: '12px',
            },
          }}
        />
        <IconButton 
          color="primary" 
          onClick={handleQuerySubmit}
          disabled={!currentQuery.trim()}
          style={{
            width: '48px',
            height: '48px',
            transition: 'transform 0.2s ease',
          }}
          className="send-button"
        >
          <SendIcon />
        </IconButton>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <Paper 
          style={{ 
            position: 'absolute', 
            top: 'calc(100% + 8px)', 
            left: 0, 
            right: 0, 
            zIndex: 1000,
            maxHeight: '250px',
            overflowY: 'auto',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <List>
            {suggestions
              .filter(suggestion => 
                suggestion.toLowerCase().includes(currentQuery.toLowerCase())
              )
              .map((suggestion, index) => (
                <ListItem 
                  key={index} 
                  button 
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="history-item"
                  style={{
                    padding: '12px 16px',
                  }}
                >
                  <ListItemText 
                    primary={suggestion}
                    primaryTypographyProps={{
                      style: {
                        fontWeight: 500,
                      }
                    }}
                  />
                </ListItem>
              ))}
          </List>
        </Paper>
      )}
    </div>
  );
};

export default QueryInput; 