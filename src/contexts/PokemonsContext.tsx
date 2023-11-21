import { createContext, useEffect, useState } from 'react';

import { getPokemon } from '../services/pokemons';

interface Pokemon {
  id: string;
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
          const id = index + 1;
          const { pokemon } = await getPokemon(id, controller.signal);

          setPokemons((prevState) => [...prevState, pokemon]);
        } catch {
          //
        } finally {
          setIsLoading(false);
        }
      });
    }

    if (pokemons.length === 0) {
      loadPokemons();
    }

    return () => {
      controller.abort();
    };
  }, [pokemons]);

  return (
    <PokemonsContext.Provider value={{ pokemons, isLoading }}>
      {children}
    </PokemonsContext.Provider>
  );
}
