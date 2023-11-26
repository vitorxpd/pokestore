import { Modal } from '../../components/Modal';
import { cn } from '../../utils/cn';
import { pokemonColors } from '../../utils/pokemonColors';

interface FilterModalProps {
  open: boolean;
  onFilterType: (type: null | string) => void;
  onClose: () => void;
}

export function FilterModal({ open, onFilterType, onClose }: FilterModalProps) {
  function handleApplyFilter(type: string) {
    onFilterType(type);
    onClose();
  }

  function handleClearFilter() {
    onFilterType(null);
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
            type="grass"
            color={pokemonColors.grass}
            onClick={() => handleApplyFilter('grass')}
          />

          <FilterTrigger
            type="normal"
            color={pokemonColors.normal}
            onClick={() => handleApplyFilter('normal')}
          />

          <FilterTrigger
            type="fighting"
            color={pokemonColors.fighting}
            onClick={() => handleApplyFilter('fighting')}
          />

          <FilterTrigger
            type="flying"
            color={pokemonColors.flying}
            onClick={() => handleApplyFilter('flying')}
          />

          <FilterTrigger
            type="poison"
            color={pokemonColors.poison}
            onClick={() => handleApplyFilter('poison')}
          />

          <FilterTrigger
            type="ground"
            color={pokemonColors.ground}
            onClick={() => handleApplyFilter('ground')}
          />

          <FilterTrigger
            type="rock"
            color={pokemonColors.rock}
            onClick={() => handleApplyFilter('rock')}
          />

          <FilterTrigger
            type="bug"
            color={pokemonColors.bug}
            onClick={() => handleApplyFilter('bug')}
          />

          <FilterTrigger
            type="ghost"
            color={pokemonColors.ghost}
            onClick={() => handleApplyFilter('ghost')}
          />

          <FilterTrigger
            type="steel"
            color={pokemonColors.steel}
            onClick={() => handleApplyFilter('steel')}
          />

          <FilterTrigger
            type="fire"
            color={pokemonColors.fire}
            onClick={() => handleApplyFilter('fire')}
          />

          <FilterTrigger
            type="water"
            color={pokemonColors.water}
            onClick={() => handleApplyFilter('water')}
          />

          <FilterTrigger
            type="electric"
            color={pokemonColors.electric}
            onClick={() => handleApplyFilter('electric')}
          />

          <FilterTrigger
            type="psychic"
            color={pokemonColors.psychic}
            onClick={() => handleApplyFilter('psychic')}
          />

          <FilterTrigger
            type="ice"
            color={pokemonColors.ice}
            onClick={() => handleApplyFilter('ice')}
          />

          <FilterTrigger
            type="dragon"
            color={pokemonColors.dragon}
            onClick={() => handleApplyFilter('dragon')}
          />

          <FilterTrigger
            type="dark"
            color={pokemonColors.dark}
            onClick={() => handleApplyFilter('dark')}
          />

          <FilterTrigger
            type="fairy"
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
  type: string;
  color: string;
  onClick: () => void;
}

const FilterTrigger = ({ type, color, onClick }: FilterTriggerProps) => {
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
      <span className="text-base text-white uppercase">{type}</span>
    </button>
  );
};
