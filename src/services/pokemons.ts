import { httpClient } from './httpClient';

export async function getPokemon(id: number, signal: AbortSignal) {
  const { data } = await httpClient.get(`/pokemon/${id}`, {
    signal,
  });

  return { pokemon: data };
}
