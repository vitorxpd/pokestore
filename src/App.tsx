import { BrowserRouter } from 'react-router-dom';

import { PokemonsProvider } from './contexts/PokemonsContext';
import { Router } from './Router';
import './styles/globals.css';

export function App() {
  return (
    <PokemonsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </PokemonsProvider>
  );
}
