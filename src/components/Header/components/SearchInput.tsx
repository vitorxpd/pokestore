import { cn } from '../../../utils/cn';

export function SearchInput() {
  return (
    <input
      placeholder="search for your pokemon here"
      className={cn(
        'w-full desktop:w-[416px] h-9 desktop:h-[42px] py-3 pl-4 desktop:pl-5 pr-[52px] desktop:pr-15',
        'text-[10px] desktop:text-xs placeholder:text-[10px] desktop:placeholder:text-xs placeholder:text-[#B0B0B0]',
        'border border-solid border-[#E0E0E0] rounded-[30px] outline-none',
      )}
    />
  );
}
