import { Link } from 'react-router-dom';

import logo from '../../assets/pokestore.svg';
import { cn } from '../../utils/cn';

import { LineDecoration } from './LineDecoration';
import { Minicart } from './Minicart';
import { SearchForm } from './SearchForm';

export function Header() {
  return (
    <header className="bg-red-primary">
      <div
        className={cn(
          'mx-auto my-0 max-w-[1440px] px-[26px] pb-5 pt-[18px] desktop:pb-6 desktop:pl-9 desktop:pr-[60px] desktop:pt-8',
          'flex flex-col gap-[10px] desktop:flex-row desktop:items-center desktop:gap-8',
        )}
        style={{
          boxShadow:
            'box-shadow: 0px 45px 250px 20px rgba(0, 0, 0, 0.15) inset',
        }}
      >
        <div className="flex flex-1 items-center justify-between">
          <Link to="/">
            <img
              src={logo}
              alt="Pokéstore Logo"
              className="desktop:h-[78px] desktop:w-[312px]"
            />
          </Link>

          <Minicart />
        </div>

        <SearchForm />
      </div>

      <LineDecoration />
    </header>
  );
}
