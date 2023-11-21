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

export async function getPokemon(id: number, signal: AbortSignal) {
  const { data } = await httpClient.get<PokemonResponse>(`/pokemon/${id}`, {
    signal,
  });

  return { pokemon: data };
}
