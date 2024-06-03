import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Index from './routes/Index';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <Container>
        <Index />
      </Container>
    </Router>
  );
}

export default App;
