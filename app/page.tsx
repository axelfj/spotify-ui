'use client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Button, AppBar, Toolbar } from '@mui/material';
import CreateTrackPage from './components/CreateTrackPage';
import SearchTrackPage from './components/SearchTrackPage';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/" sx={{ marginRight: 2 }}>
            Create Track
          </Button>
          <Button color="inherit" component={Link} to="/search">
            Search Track
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ paddingTop: 4 }}>
        <Routes>
          <Route path="/" element={<CreateTrackPage />} />
          <Route path="/search" element={<SearchTrackPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
