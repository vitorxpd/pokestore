import { pokemonColors } from '../../utils/pokemonColors';
import { httpClient } from '../httpClient';

export interface PokemonResponse {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  types: {
    type: {
      name: keyof typeof pokemonColors;
    };
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
}

export async function getPokemon(name: string, signal?: AbortSignal) {
  const { data } = await httpClient.get<PokemonResponse>(`/pokemon/${name}`, {
    signal,
  });

  return { pokemon: data };
}
