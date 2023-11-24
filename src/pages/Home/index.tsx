import { PokemonCard } from '../../components/PokemonCard';
import { PokemonModal } from '../../components/PokemonModal';
import { Spinner } from '../../components/Spinner';
import { cn } from '../../utils/cn';

import { FilterButton } from './FilterButton';
import { FilterModal } from './FilterModal';
import { useHomeController } from './useHomeController';

export function Home() {
  const {
    isLoading,
    pokemons,
    currentPokemon,
    pokemonModalIsOpen,
    filterModalIsOpen,
    handleOpenPokemonModal,
    handleClosePokemonModal,
    handleOpenFilterModal,
    handleCloseFilterModal,
  } = useHomeController();

  return (
    <main className="max-w-[1440px] mx-auto pt-[72px] desktop:pt-11 pb-[30px] desktop:pb-20 px-4 flex flex-col items-center relative">
      <FilterButton
        className={cn(
          'absolute top-2 desktop:top-11 right-[14px] desktop:right-[-18px]',
        )}
        onClick={handleOpenFilterModal}
      />

      <FilterModal open={filterModalIsOpen} onClose={handleCloseFilterModal} />

      <ul className="grid grid-cols-[repeat(2,calc(180px+24px))] desktop:grid-cols-[repeat(4,calc(275px+37px))] gap-[14px] desktop:gap-[38px]">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onOpenModal={handleOpenPokemonModal}
          />
        ))}
      </ul>

      {isLoading && <Spinner className="desktop:w-12 desktop:h-12 mt-6" />}

      {currentPokemon && (
        <PokemonModal
          pokemon={currentPokemon}
          open={pokemonModalIsOpen}
          onClose={handleClosePokemonModal}
        />
      )}
    </main>
  );
}
