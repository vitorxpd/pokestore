import filterIcon from '../../assets/icons/filter.svg';
import { cn } from '../../utils/cn';

interface FilterTriggerProps {
  onOpenFilterModal: () => void;
}

export function FilterTrigger({ onOpenFilterModal }: FilterTriggerProps) {
  return (
    <div className="mb-[10px] flex w-[calc((180px+14px)*2)] justify-end desktop:absolute desktop:z-10 desktop:w-[calc((275px+37px+37px)*4)]">
      <button
        className={cn(
          'flex h-[50px] w-[50px] items-center justify-center desktop:h-[76px] desktop:w-[76px]',
          'rounded-full border border-solid border-[#E0E0E0] bg-white',
          'shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]',
        )}
        onClick={onOpenFilterModal}
      >
        <img
          src={filterIcon}
          alt="Filter"
          className="desktop:h-[50px] desktop:w-[50px]"
        />
      </button>
    </div>
  );
}
