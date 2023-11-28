import { PokemonCard } from '../../components/PokemonCard';
import { PokemonModal } from '../../components/PokemonModal';
import { Spinner } from '../../components/Spinner';
import { cn } from '../../utils/cn';

import { FilterModal } from './FilterModal';
import { FilterTrigger } from './FilterTrigger';
import { useHomeController } from './useHomeController';

export function Home() {
  const {
    isLoading,
    currentPokemon,
    pokemonModalIsOpen,
    filterModalIsOpen,
    filterType,
    filteredPokemons,
    openPokemonModal,
    closePokemonModal,
    openFilterModal,
    closeFilterModal,
    addFilterType,
  } = useHomeController();

  return (
    <main
      className={cn(
        'relative mx-auto max-w-[1440px] px-4 pb-[30px] pt-7 desktop:pb-20 desktop:pt-11',
        'flex flex-col items-center',
      )}
    >
      {filterType && (
        <div className="mb-[10px] w-[calc((180px+24px)*2)] desktop:mb-6 desktop:w-[calc((275px+37px)*4)]">
          <p className="text-[10px] opacity-60 desktop:text-2xl">
            results for all {filterType} type pokémon
          </p>

          <p className="text-[8px] opacity-40 desktop:text-base">
            ordered by name
          </p>
        </div>
      )}

      <FilterTrigger onOpenFilterModal={openFilterModal} />

      <ul className="grid grid-cols-[repeat(2,calc(180px+24px))] justify-items-center gap-[14px] desktop:grid-cols-[repeat(4,calc(275px+37px))] desktop:gap-[38px]">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onOpenModal={openPokemonModal}
          />
        ))}
      </ul>

      {isLoading && <Spinner className="mt-6 desktop:h-12 desktop:w-12" />}

      {currentPokemon && (
        <PokemonModal
          pokemon={currentPokemon}
          open={pokemonModalIsOpen}
          onClose={closePokemonModal}
        />
      )}

      <FilterModal
        open={filterModalIsOpen}
        onFilterType={addFilterType}
        onClose={closeFilterModal}
      />
    </main>
  );
}
