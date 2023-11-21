import { getPokemon, PokemonResponse } from './getPokemon';
import { getPokemonSpecie, PokemonSpecieResponse } from './getPokemonSpecie';

export const pokemonsService = {
  getPokemon,
  getPokemonSpecie,
};

export type { PokemonResponse, PokemonSpecieResponse };
