import logo from './logo.svg';
import './App.css';
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
              //<Route path='/Login' element={<Login/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
