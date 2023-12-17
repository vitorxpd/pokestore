import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Pokemon } from '../../interfaces/Pokemon';
import { pokemonsService } from '../../services/pokemonsService';
import { delay } from '../../utils/delay';
import { getPokemonPrice } from '../../utils/getPokemonPrice';
import { pokemonColors } from '../../utils/pokemonColors';

interface PokemonParams {
  id: string;
}

export function usePokemonController() {
  const [currentPokemon, setCurrentPokemon] = useState<null | Pokemon>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { id: paramId } = useParams<Partial<PokemonParams>>();

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    setCurrentPokemon(null);

    const controller = new AbortController();

    async function loadPokemon() {
      setIsLoading(true);
      await delay();

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
        } = await pokemonsService.getPokemon(paramId ?? '', controller.signal);

        const { price } = await getPokemonPrice(name);

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

        setCurrentPokemon(newPokemon);
      } catch {
        //
      } finally {
        setIsLoading(false);
      }
    }

    loadPokemon();

    return () => {
      controller.abort();
    };
  }, [paramId]);

  return {
    currentPokemon,
    modalIsOpen,
    isLoading,
    paramId,
    openModal,
    closeModal,
  };
}
