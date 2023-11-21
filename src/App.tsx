import { PokemonsProvider } from './contexts/PokemonsContext';
import { Router } from './Router';
import './styles/globals.css';

export function App() {
  return (
    <PokemonsProvider>
      <Router />
    </PokemonsProvider>
  );
}
