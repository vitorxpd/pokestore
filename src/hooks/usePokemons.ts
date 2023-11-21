import { useContext } from 'react';

import { PokemonsContext } from '../contexts/PokemonsContext';

export function usePokemons() {
  return useContext(PokemonsContext);
}
