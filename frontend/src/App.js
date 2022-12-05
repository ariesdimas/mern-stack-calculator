import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom';
import Calculator from 'pages/calculator';
import Login from 'pages/login';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from 'theme';

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <div className="app">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
          <Route path="/" element={isAuth ? <Calculator /> : <Login />} />
          <Route path="/calculator" element={isAuth ? <Calculator /> : <Navigate to="/" />} />
        </Routes>

      </ThemeProvider>
       
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
