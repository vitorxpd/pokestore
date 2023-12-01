import { FormEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import magnifierIcon from '../../assets/icons/magnifier.svg';
import { cn } from '../../utils/cn';

export function SearchForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const value = inputRef.current?.value;
    navigate(`/pokemon/${value?.toLowerCase()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        ref={inputRef}
        name="name"
        placeholder="search for your pokemon here"
        className={cn(
          'desktop:pr-15 h-9 w-full py-3 pl-4 pr-[52px] desktop:h-[42px] desktop:w-[416px] desktop:pl-5',
          'text-[10px] placeholder:text-[10px] placeholder:text-[#B0B0B0] desktop:text-xs desktop:placeholder:text-xs',
          'rounded-[30px] border border-solid border-[#E0E0E0] outline-none',
        )}
        required
      />

      <button type="submit">
        <img
          src={magnifierIcon}
          alt="Search"
          className="absolute right-3 top-[6px] desktop:h-[30px] desktop:w-[30px]"
        />
      </button>
    </form>
  );
}
