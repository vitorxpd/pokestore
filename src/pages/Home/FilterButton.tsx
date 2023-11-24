import filterIcon from '../../assets/icons/filter.svg';
import { cn } from '../../utils/cn';

interface FilterProps {
  className: string;
  onClick: () => void;
}

export function FilterButton({ className, onClick }: FilterProps) {
  return (
    <button
      className={cn(
        'w-[50px] desktop:w-[76px] h-[50px] desktop:h-[76px] flex items-center justify-center',
        'border border-solid border-[#E0E0E0] rounded-full',
        'shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]',
        className,
      )}
      onClick={onClick}
    >
      <img
        src={filterIcon}
        alt="Filter"
        className="desktop:w-[50px] desktop:h-[50px]"
      />
    </button>
  );
}
