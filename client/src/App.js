import './App.css';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Conditions from './components/containers/Conditions';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Your MD: Medical Conditions
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Conditions />
      </main>
    </div>
  );
}

export default App;
