import { useEffect, useState } from 'react';

import {
  PokemonsResponse,
  pokemonsService,
} from '../../services/pokemonsService';
import { getPokemon } from '../../services/pokemonsService/getPokemon';
import { Pokemon } from '../../types/pokemon';
import { delay } from '../../utils/delay';
import { getPokemonPrice } from '../../utils/getPokemonPrice';
import { pokemonColors } from '../../utils/pokemonColors';

export function useHomeController() {
  const [pokemonData, setPokemonData] = useState({} as PokemonsResponse);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPokemonData() {
      try {
        const { data } = await pokemonsService.getPokemons(
          { limit: 12, offset: 0 },
          controller.signal,
        );
        setPokemonData(data);
      } catch {
        //
      }
    }

    loadPokemonData();

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    async function lazyLoading() {
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= documentHeight) {
        try {
          const url = new URL(pokemonData.next);
          const limit = Number(url.searchParams.get('limit'));
          const offset = Number(url.searchParams.get('offset'));

          const { data } = await pokemonsService.getPokemons({ limit, offset });

          setPokemonData(data);
        } catch {
          //
        }
      }
    }

    window.addEventListener('scroll', lazyLoading);

    return () => {
      window.removeEventListener('scroll', lazyLoading);
    };
  }, [pokemonData]);

  useEffect(() => {
    async function loadPokemons() {
      await delay();

      pokemonData?.results?.forEach(async (singlePokemon) => {
        try {
          const {
            pokemon: {
              base_experience,
              height,
              id,
              name,
              sprites,
              types,
              weight,
            },
          } = await getPokemon(singlePokemon.name);

          const { price } = await getPokemonPrice(singlePokemon.name);

          const formattedTypes = types.map(({ type }) => {
            return {
              name: type.name,
              color: pokemonColors[type.name],
            };
          });

          const newPokemon: Pokemon = {
            base_experience,
            height,
            id,
            name,
            price,
            sprite: sprites.other.dream_world.front_default,
            types: formattedTypes,
            weight,
          };

          setPokemons((prevState) => [...prevState, newPokemon]);
        } catch {
          //
        }
      });
    }

    loadPokemons();
  }, [pokemonData]);

  return {
    pokemons,
    isLoading,
  };
}
