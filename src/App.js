import logo from './logo.svg';
import './App.css';
import * as React from 'react';
// Pages
import HomePage from './Pages/HomePage/HomePage'
// Theme
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './Theme/ThemeGenerator'
import CssBaseline from '@mui/material/CssBaseline'
//
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <BrowserRouter>
          <div>
            <Routes>
              //Routes
              //<Route path='/' element={<HomePage/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
