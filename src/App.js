import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, AppBar, Toolbar, Typography } from '@mui/material';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import ResultsDisplay from './components/ResultsDisplay';
import store from './store/store';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" component="div">
              Gen AI Analytics Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Container style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <QueryInput />
          <ResultsDisplay />
          <QueryHistory />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
