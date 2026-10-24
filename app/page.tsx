'use client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import { signIn, signOut } from './api/config';
import { Container, Button, AppBar, Toolbar } from '@mui/material';
import CreateTrackPage from './components/CreateTrackPage';
import SearchTrackPage from './components/SearchTrackPage';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');
  if (!authenticated) return <Container maxWidth="sm"><h1>Sign in to the track API</h1><form onSubmit={event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try { signIn(String(data.get('username') || ''), String(data.get('password') || '')); event.currentTarget.reset(); setAuthenticated(true); }
    catch (failure) { setError(failure instanceof Error ? failure.message : 'Sign-in failed'); }
  }}><label>Username<input name="username" autoComplete="username" required /></label><label>Password<input name="password" type="password" autoComplete="current-password" required /></label><Button type="submit">Sign in</Button>{error && <p role="alert">{error}</p>}</form></Container>;
  return (
    <Router>
      <AppBar position="static">
        <Toolbar><Button color="inherit" onClick={() => { signOut(); setAuthenticated(false); }}>Sign out</Button>
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
