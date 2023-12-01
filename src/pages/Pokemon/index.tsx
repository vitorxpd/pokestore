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
    openModal,
    closeModal,
  } = usePokemonController();

  return (
    <main className="mx-auto max-w-[1440px] px-11 py-9">
      {isLoading && (
        <Spinner className="mx-auto mt-6 desktop:h-12 desktop:w-12" />
      )}

      {!isLoading && !currentPokemon && (
        <div>
          <p className="text-xs opacity-80 desktop:text-3xl">
            results for {paramId}
          </p>

          <div className="relative mx-auto mt-[70px] h-56 w-[174px] desktop:mt-[102px] desktop:h-[348px] desktop:w-[286px]">
            <img src={dragonite} alt="Dragonite" className="w-full" />

            <img
              src={questionIcon}
              alt="Question"
              className="absolute bottom-16 left-11 desktop:bottom-[98px] desktop:left-[78px] desktop:h-[76px] desktop:w-[72px]"
            />
          </div>

          <div className="mt-[38px] flex flex-col items-center gap-3 desktop:mt-8">
            <p className="text-center text-[10px] opacity-60 desktop:text-sm">
              the pokedex doesn&apos;t have any info about this pokemon :(
            </p>

            <Link to="/" className="text-[10px] opacity-40 desktop:text-sm">
              return to the home
            </Link>
          </div>
        </div>
      )}

      {!isLoading && currentPokemon && (
        <div className="flex justify-center desktop:justify-start">
          <PokemonCard pokemon={currentPokemon} onOpenModal={openModal} />

          <PokemonModal
            pokemon={currentPokemon}
            open={modalIsOpen}
            onClose={closeModal}
          />
        </div>
      )}
    </main>
  );
}
