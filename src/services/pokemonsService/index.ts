import { getPokemon, PokemonResponse } from './getPokemon';
import { getPokemons, PokemonsResponse } from './getPokemons';
import { getPokemonSpecie, PokemonSpecieResponse } from './getPokemonSpecie';

export const pokemonsService = {
  getPokemon,
  getPokemons,
  getPokemonSpecie,
};

export type { PokemonResponse, PokemonsResponse, PokemonSpecieResponse };
