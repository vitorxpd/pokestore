import filterIcon from '../../assets/icons/filter.svg';
import { PokemonCard } from '../../components/PokemonCard';
import { PokemonModal } from '../../components/PokemonModal';
import { Spinner } from '../../components/Spinner';
import { cn } from '../../utils/cn';

import { FilterModal } from './FilterModal';
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
        'mx-auto max-w-[1440px] px-4 pb-[30px] desktop:pb-20',
        'relative flex flex-col items-center',
        filterType ? 'pt-7 desktop:pt-7' : 'pt-[72px] desktop:pt-20',
      )}
    >
      <button
        className={cn(
          'flex h-[50px] w-[50px] items-center justify-center desktop:h-[76px] desktop:w-[76px]',
          'rounded-full border border-solid border-[#E0E0E0]',
          'absolute right-[68px] top-2 desktop:right-[-18px] desktop:top-11',
          'shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]',
        )}
        onClick={openFilterModal}
      >
        <img
          src={filterIcon}
          alt="Filter"
          className="desktop:h-[50px] desktop:w-[50px]"
        />
      </button>

      {filterType && (
        <div className="mb-[74px] w-[calc((180px+24px)*2)] desktop:mb-6 desktop:w-[calc((275px+37px)*4)]">
          <p className="text-[10px] opacity-60 desktop:text-2xl">
            results for all {filterType} type pokémon
          </p>

          <p className="text-[8px] opacity-40 desktop:text-base">
            ordered by name
          </p>
        </div>
      )}

      <ul className="grid grid-cols-[repeat(2,calc(180px+24px))] gap-[14px] desktop:grid-cols-[repeat(4,calc(275px+37px))] desktop:gap-[38px]">
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
