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
    handleOpenPokemonModal,
    handleClosePokemonModal,
    handleOpenFilterModal,
    handleCloseFilterModal,
    handleSetFilterType,
  } = useHomeController();

  return (
    <main className="max-w-[1440px] mx-auto pt-[72px] desktop:pt-20 pb-[30px] desktop:pb-20 px-4 flex flex-col items-center relative">
      <button
        className={cn(
          'w-[50px] desktop:w-[76px] h-[50px] desktop:h-[76px] flex items-center justify-center',
          'border border-solid border-[#E0E0E0] rounded-full',
          'absolute top-2 desktop:top-20 right-[68px] desktop:right-[-18px]',
          'shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]',
        )}
        onClick={handleOpenFilterModal}
      >
        <img
          src={filterIcon}
          alt="Filter"
          className="desktop:w-[50px] desktop:h-[50px]"
        />
      </button>

      {filterType && (
        <div className="w-[calc((180px+24px)*2)] desktop:w-[calc((275px+37px)*4)] mb-10">
          <p className="text-[10px] desktop:text-2xl opacity-60">
            results for all {filterType} type pokemon
          </p>

          <p className="text-[8px] desktop:text-base opacity-40">
            ordered by name
          </p>
        </div>
      )}

      <ul className="grid grid-cols-[repeat(2,calc(180px+24px))] desktop:grid-cols-[repeat(4,calc(275px+37px))] gap-[14px] desktop:gap-[38px]">
        {filteredPokemons.map((pokemon) => (
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

      <FilterModal
        open={filterModalIsOpen}
        onFilterType={handleSetFilterType}
        onClose={handleCloseFilterModal}
      />
    </main>
  );
}
