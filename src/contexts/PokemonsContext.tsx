import { createContext, useEffect, useState } from 'react';

import { pokemonsService, PokemonResponse } from '../services/pokemonsService';
import { getPokemonPrice } from '../utils/getPokemonPrice';

interface Pokemon extends PokemonResponse {
  price: number;
}

interface PokemonsContextProps {
  pokemons: Pokemon[];
  isLoading: boolean;
}

export const PokemonsContext = createContext({} as PokemonsContextProps);

export function PokemonsProvider({ children }: { children: React.ReactNode }) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPokemons() {
      Array.from({ length: 151 }).map(async (_, index) => {
        try {
          const pokemonId = index + 1;
          const {
            pokemon: { base_experience, height, id, name, sprites, weight },
          } = await pokemonsService.getPokemon(pokemonId, controller.signal);

          const { price } = await getPokemonPrice(name);

          const newPokemon: Pokemon = {
            base_experience,
            height,
            id,
            name,
            price,
            sprites,
            weight,
          };

          setPokemons((prevState) => [...prevState, newPokemon]);
        } catch {
          //
        } finally {
          setIsLoading(false);
        }
      });
    }

    loadPokemons();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PokemonsContext.Provider value={{ pokemons, isLoading }}>
      {children}
    </PokemonsContext.Provider>
  );
}
