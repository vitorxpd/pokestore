import { ReactNode, createContext, useEffect, useState } from 'react';

import { getPokemon } from '../services/pokemons';

interface PokemonsContextProps {
  isLoading: boolean;
}

export const PokemonsContext = createContext({} as PokemonsContextProps);

interface Pokemon {
  id: string;
}

interface PokemonProviderProps {
  children: ReactNode;
}

export function PokemonsContextProvider({ children }: PokemonProviderProps) {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const limit = 151;

  useEffect(() => {
    const controller = new AbortController();

    async function loadPokemons() {
      Array.from({ length: limit }).map(async (_, index) => {
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
    <PokemonsContext.Provider value={{ isLoading }}>
      {children}
    </PokemonsContext.Provider>
  );
}
