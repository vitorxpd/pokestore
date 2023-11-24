import { Modal } from '../../components/Modal';
import { cn } from '../../utils/cn';
import { pokemonColors } from '../../utils/pokemonColors';

interface FilterModalProps {
  open: boolean;
  onClose: () => void;
}

export function FilterModal({ open, onClose }: FilterModalProps) {
  function handleApplyFilter(type: string) {
    console.log(type);
    onClose();
  }

  function handleClearFilter() {
    onClose();
  }

  return (
    <Modal open={open}>
      <div className="w-screen h-screen py-[30px] desktop:w-[512px] desktop:h-auto flex flex-col items-center bg-white relative desktop:rounded-[30px]">
        <button
          onClick={onClose}
          className="flex items-center justify-center absolute top-6 right-5"
        >
          <span className="text-2xl opacity-60">X</span>
        </button>

        <div>
          <span className="text-[24px]">Pokemon Types</span>
        </div>

        <div className="mt-[26px] px-[20px] grid grid-cols-[repeat(2,1fr)] gap-[26px] overflow-y-auto">
          <FilterTrigger
            element="grass"
            color={pokemonColors.grass}
            onClick={() => handleApplyFilter('grass')}
          />

          <FilterTrigger
            element="normal"
            color={pokemonColors.normal}
            onClick={() => handleApplyFilter('normal')}
          />

          <FilterTrigger
            element="fighting"
            color={pokemonColors.fighting}
            onClick={() => handleApplyFilter('fighting')}
          />

          <FilterTrigger
            element="flying"
            color={pokemonColors.flying}
            onClick={() => handleApplyFilter('flying')}
          />

          <FilterTrigger
            element="poison"
            color={pokemonColors.poison}
            onClick={() => handleApplyFilter('poison')}
          />

          <FilterTrigger
            element="ground"
            color={pokemonColors.ground}
            onClick={() => handleApplyFilter('ground')}
          />

          <FilterTrigger
            element="rock"
            color={pokemonColors.rock}
            onClick={() => handleApplyFilter('rock')}
          />

          <FilterTrigger
            element="bug"
            color={pokemonColors.bug}
            onClick={() => handleApplyFilter('bug')}
          />

          <FilterTrigger
            element="ghost"
            color={pokemonColors.ghost}
            onClick={() => handleApplyFilter('ghost')}
          />

          <FilterTrigger
            element="steel"
            color={pokemonColors.steel}
            onClick={() => handleApplyFilter('steel')}
          />

          <FilterTrigger
            element="fire"
            color={pokemonColors.fire}
            onClick={() => handleApplyFilter('fire')}
          />

          <FilterTrigger
            element="water"
            color={pokemonColors.water}
            onClick={() => handleApplyFilter('water')}
          />

          <FilterTrigger
            element="electric"
            color={pokemonColors.electric}
            onClick={() => handleApplyFilter('electric')}
          />

          <FilterTrigger
            element="psychic"
            color={pokemonColors.psychic}
            onClick={() => handleApplyFilter('psychic')}
          />

          <FilterTrigger
            element="ice"
            color={pokemonColors.ice}
            onClick={() => handleApplyFilter('ice')}
          />

          <FilterTrigger
            element="dragon"
            color={pokemonColors.dragon}
            onClick={() => handleApplyFilter('dragon')}
          />

          <FilterTrigger
            element="dark"
            color={pokemonColors.dark}
            onClick={() => handleApplyFilter('dark')}
          />

          <FilterTrigger
            element="fairy"
            color={pokemonColors.fairy}
            onClick={() => handleApplyFilter('fairy')}
          />
        </div>

        <div className="mt-[26px] flex justify-center">
          <button
            className="text-base underline opacity-40"
            onClick={handleClearFilter}
          >
            limpar filtro
          </button>
        </div>
      </div>
    </Modal>
  );
}

interface FilterTriggerProps {
  element: string;
  color: string;
  onClick: () => void;
}

const FilterTrigger = ({ element, color, onClick }: FilterTriggerProps) => {
  return (
    <button
      className={cn(
        'w-[148px] h-[50px] flex justify-center items-center rounded-[30px]',
        'border border-solid border-black',
        'shadow-[0_0_2px_3px_rgba(255,255,255,0.80)_inset]',
      )}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <span className="text-base text-white uppercase">{element}</span>
    </button>
  );
};
