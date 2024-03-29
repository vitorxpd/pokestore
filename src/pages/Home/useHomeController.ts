import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Pokemon } from '../../interfaces/Pokemon';
import {
  PokemonsResponse,
  pokemonsService,
} from '../../services/pokemonsService';
import { getPokemon } from '../../services/pokemonsService/getPokemon';
import { delay } from '../../utils/delay';
import { getPokemonPrice } from '../../utils/getPokemonPrice';
import { pokemonColors } from '../../utils/pokemonColors';

export function useHomeController() {
  const [pokemonData, setPokemonData] = useState<null | PokemonsResponse>(null);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState<null | Pokemon>(null);
  const [pokemonModalIsOpen, setPokemonModalIsOpen] = useState(false);
  const [filterModalIsOpen, setFilterModalIsOpen] = useState(false);

  const [urlFilter, setUrlFilter] = useSearchParams();

  const filteredPokemons = pokemons
    .sort((a, b) => a.id - b.id)
    .filter((pokemon) => {
      const pokemonType = pokemon.types.find(
        (type) => type.name === urlFilter.get('type'),
      );

      if (urlFilter.get('type')) {
        return pokemonType?.name === urlFilter.get('type');
      } else {
        return pokemons;
      }
    });

  function openPokemonModal(pokemon: Pokemon) {
    setCurrentPokemon(pokemon);
    setPokemonModalIsOpen(true);
  }

  function closePokemonModal() {
    setCurrentPokemon(null);
    setPokemonModalIsOpen(false);
  }

  function openFilterModal() {
    setFilterModalIsOpen(true);
  }

  function closeFilterModal() {
    setFilterModalIsOpen(false);
  }

  function addUrlFilter(filter: null | string) {
    filter ? setUrlFilter({ type: filter }) : setUrlFilter(undefined);
  }

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
      if (urlFilter.get('type')) {
        return;
      }

      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition >= documentHeight) {
        try {
          const url = new URL(pokemonData!.next);
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
  }, [pokemonData, urlFilter]);

  useEffect(() => {
    async function loadPokemons() {
      setIsLoading(true);
      await delay();

      pokemonData?.results.forEach(async (singlePokemon) => {
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
            sprite: sprites.other.home.front_default,
            types: formattedTypes,
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
  }, [pokemonData]);

  return {
    isLoading,
    currentPokemon,
    pokemonModalIsOpen,
    filterModalIsOpen,
    urlFilter: urlFilter.get('type'),
    filteredPokemons,
    openPokemonModal,
    closePokemonModal,
    openFilterModal,
    closeFilterModal,
    addUrlFilter,
  };
}
