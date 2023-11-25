import { Link } from 'react-router-dom';

import dragonite from '../../assets/dragonite.svg';
import questionIcon from '../../assets/icons/question.svg';
import { PokemonCard } from '../../components/PokemonCard';
import { PokemonModal } from '../../components/PokemonModal';
import { Spinner } from '../../components/Spinner';

import { usePokemonController } from './usePokemonController';

export function Pokemon() {
  const {
    currentPokemon,
    modalIsOpen,
    isLoading,
    paramId,
    handleOpenModal,
    handleCloseModal,
  } = usePokemonController();

  return (
    <main className="max-w-[1440px] mx-auto px-11 py-9">
      {isLoading && (
        <Spinner className="mx-auto desktop:w-12 desktop:h-12 mt-6" />
      )}

      {!isLoading && !currentPokemon && (
        <div>
          <p className="text-xs desktop:text-3xl opacity-80">
            results for {paramId}
          </p>

          <div className="w-[174px] desktop:w-[286px] h-56 desktop:h-[348px] mt-[70px] desktop:mt-[102px] mx-auto relative">
            <img src={dragonite} alt="Dragonite" className="w-full" />

            <img
              src={questionIcon}
              alt="Question"
              className="desktop:w-[72px] desktop:h-[76px] absolute left-11 bottom-16 desktop:left-[78px] desktop:bottom-[98px]"
            />
          </div>

          <div className="mt-[38px] desktop:mt-8 flex flex-col items-center gap-3">
            <p className="text-[10px] desktop:text-sm text-center opacity-60">
              the pokédex doesn&apos;t have any info about this pokémon :(
            </p>

            <Link to="/" className="text-[10px] desktop:text-sm opacity-40">
              return to the home
            </Link>
          </div>
        </div>
      )}

      {!isLoading && currentPokemon && (
        <div className="flex justify-center desktop:justify-start">
          <PokemonCard pokemon={currentPokemon} onOpenModal={handleOpenModal} />

          <PokemonModal
            pokemon={currentPokemon}
            open={modalIsOpen}
            onClose={handleCloseModal}
          />
        </div>
      )}
    </main>
  );
}
