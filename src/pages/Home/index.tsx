import { Spinner } from '../../components/Spinner';
import { cn } from '../../utils/cn';

import { Card } from './Card';
import { FilterButton } from './FilterButton';
import { PokemonModal } from './PokemonModal';
import { useHomeController } from './useHomeController';

export function Home() {
  const {
    isLoading,
    pokemons,
    currentPokemon,
    modalIsOpen,
    openModal,
    closeModal,
  } = useHomeController();

  return (
    <main className="max-w-[1440px] mx-auto my-0 pt-[72px] desktop:pt-11 pb-[30px] desktop:pb-20 px-4 flex flex-col items-center relative">
      <FilterButton
        className={cn(
          'absolute top-2 desktop:top-11 right-[14px] desktop:right-[-18px]',
        )}
      />

      <ul className="grid grid-cols-[repeat(2,calc(180px+24px))] desktop:grid-cols-[repeat(4,calc(275px+37px))] gap-[14px] desktop:gap-[38px]">
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            base_experience={pokemon.base_experience}
            height={pokemon.height}
            weight={pokemon.weight}
            price={pokemon.price}
            sprite={pokemon.sprite}
            types={pokemon.types}
            onOpenModal={openModal}
          />
        ))}
      </ul>

      {isLoading && <Spinner className="desktop:w-12 desktop:h-12 mt-6" />}

      {currentPokemon && (
        <PokemonModal
          currentPokemon={currentPokemon}
          open={modalIsOpen}
          onClose={closeModal}
        />
      )}
    </main>
  );
}
