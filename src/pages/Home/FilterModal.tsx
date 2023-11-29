import { useEffect, useState } from 'react';

import { cn } from '../../utils/cn';

interface FilterModalProps {
  open: boolean;
  currentFilter: null | string;
  onClose: () => void;
  onAddCurrentFilter: (filter: null | string) => void;
}

export function FilterModal({
  open,
  currentFilter,
  onClose,
  onAddCurrentFilter,
}: FilterModalProps) {
  const [closeTransition, setCloseTransition] = useState(false);

  const filters = {
    orderBy: ['name', 'key', 'base_experience', 'height', 'weight'],
    types: [
      'grass',
      'fighting',
      'poison',
      'rock',
      'ghost',
      'fire',
      'electric',
      'ice',
      'dark',
      'normal',
      'flying',
      'ground',
      'bug',
      'steel',
      'water',
      'psychic',
      'dragon',
      'fairy',
    ],
  };

  function handleCloseModal() {
    setCloseTransition(true);

    setTimeout(() => {
      setCloseTransition(false);
      onClose();
    }, 200);
  }

  function handleApplyFilter(filter: null | string) {
    onAddCurrentFilter(filter);
    handleCloseModal();
  }

  useEffect(() => {
    open
      ? document.body.classList.add('no-scroll')
      : document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-50 h-full w-full',
        open ? 'block' : 'hidden',
      )}
    >
      <div className="h-full w-full bg-black/70" onClick={handleCloseModal} />

      <div
        className={cn(
          'absolute right-0 top-0 overflow-auto',
          'h-full w-[300px] bg-white p-4 desktop:w-[340px]',
          open ? 'animate-slide-in block' : 'hidden',
          closeTransition && 'animate-slide-out',
        )}
      >
        <div className="flex justify-end">
          <button
            className="flex items-center justify-center"
            onClick={handleCloseModal}
          >
            <span className="text-2xl opacity-60">X</span>
          </button>
        </div>

        <div className="mt-6 flex flex-col items-end">
          <div className="flex flex-col items-end gap-1">
            <strong className="text-sm desktop:text-lg">filter by type</strong>

            {currentFilter && (
              <button
                className="text-[8px] opacity-60 desktop:text-[10px]"
                onClick={() => handleApplyFilter(null)}
              >
                clear filter: {currentFilter}
              </button>
            )}

            {!currentFilter && (
              <p className="text-[8px] opacity-60 desktop:text-[10px]">
                no filter applied
              </p>
            )}
          </div>

          <ul className="mt-4">
            {filters.types.map((type) => (
              <TypeItem
                key={type}
                label={type}
                action={() => handleApplyFilter(type)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
interface TypeItemProps {
  className?: string;
  label: string;
  action: () => void;
}

export const TypeItem = ({ className, label, action }: TypeItemProps) => {
  return (
    <li className="text-end">
      <button
        className={cn(
          'text-sm text-red-primary underline desktop:text-lg',
          className,
        )}
        onClick={action}
      >
        {label}
      </button>
    </li>
  );
};
