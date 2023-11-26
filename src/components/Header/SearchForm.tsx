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
        placeholder="search for your pokémon here"
        className={cn(
          'w-full desktop:w-[416px] h-9 desktop:h-[42px] py-3 pl-4 desktop:pl-5 pr-[52px] desktop:pr-15',
          'text-[10px] desktop:text-xs placeholder:text-[10px] desktop:placeholder:text-xs placeholder:text-[#B0B0B0]',
          'border border-solid border-[#E0E0E0] rounded-[30px] outline-none',
        )}
        required
      />

      <button type="submit">
        <img
          src={magnifierIcon}
          alt="Search"
          className="desktop:w-[30px] desktop:h-[30px] absolute top-[6px] right-3"
        />
      </button>
    </form>
  );
}
