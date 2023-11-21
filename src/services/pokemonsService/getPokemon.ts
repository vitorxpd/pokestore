import { httpClient } from '../httpClient';

export interface PokemonResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export async function getPokemon(name: string) {
  const { data } = await httpClient.get(`/pokemon/${name}`);

  return { pokemon: data };
}
