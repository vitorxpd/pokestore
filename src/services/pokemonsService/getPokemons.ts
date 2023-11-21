import { httpClient } from '../httpClient';

export interface PokemonsResponse {
  next: string;
  results: {
    name: string;
  }[];
}

export async function getPokemons(
  params: { limit: number; offset: number },
  signal?: AbortSignal,
) {
  const { data } = await httpClient.get<PokemonsResponse>('/pokemon', {
    params,
    signal,
  });

  return { data };
}
