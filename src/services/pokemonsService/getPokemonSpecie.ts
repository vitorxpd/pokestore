import { httpClient } from '../httpClient';

export interface PokemonSpecieResponse {
  base_happiness: number;
  capture_rate: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
}

export async function getPokemonSpecie(name: string) {
  const { data } = await httpClient.get<PokemonSpecieResponse>(
    `/pokemon-species/${name}`,
  );

  return { pokemon: data };
}
