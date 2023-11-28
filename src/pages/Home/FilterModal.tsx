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
      <div className="relative flex h-screen w-screen flex-col items-center bg-white py-[30px] desktop:h-auto desktop:w-[512px] desktop:rounded-[30px]">
        <button
          onClick={onClose}
          className="absolute right-5 top-6 flex items-center justify-center"
        >
          <span className="text-2xl opacity-60">X</span>
        </button>

        <div>
          <span className="text-[24px]">Pokemon Types</span>
        </div>

        <div className="mt-[26px] grid grid-cols-[repeat(2,1fr)] gap-[26px] overflow-y-auto px-[20px]">
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
        'flex h-[50px] w-[148px] items-center justify-center rounded-[30px]',
        'border border-solid border-black',
        'shadow-[0_0_2px_3px_rgba(255,255,255,0.80)_inset]',
      )}
      style={{
        backgroundColor: color,
      }}
      onClick={onClick}
    >
      <span className="text-base uppercase text-white">{type}</span>
    </button>
  );
};
