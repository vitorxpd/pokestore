import { BrowserRouter } from 'react-router-dom';

import { Router } from './Router';
import './styles/globals.css';

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
