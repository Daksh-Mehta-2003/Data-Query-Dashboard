import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuery: '',
  queryHistory: [],
  results: null,
  isLoading: false,
  error: null,
  suggestions: [
    'Show me sales trends for the last quarter',
    'What are the top performing products?',
    'Compare revenue across regions',
    'Analyze customer demographics'
  ]
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setCurrentQuery: (state, action) => {
      state.currentQuery = action.payload;
    },
    addToHistory: (state, action) => {
      state.queryHistory.unshift(action.payload);
    },
    setResults: (state, action) => {
      state.results = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    }
  }
});

export const {
  setCurrentQuery,
  addToHistory,
  setResults,
  setLoading,
  setError,
  clearError
} = querySlice.actions;

export default querySlice.reducer; 