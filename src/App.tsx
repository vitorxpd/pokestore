import { PokemonsContextProvider } from './contexts/PokemonsContext';
import { Router } from './Router';
import './assets/styles/globals.css';

export function App() {
  return (
    <PokemonsContextProvider>
      <Router />
    </PokemonsContextProvider>
  );
}
