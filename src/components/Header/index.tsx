import { Link } from 'react-router-dom';

import cartIcon from '../../assets/icons/cart.svg';
import logo from '../../assets/pokestore.svg';
import { cn } from '../../utils/cn';

import { LineDecoration } from './LineDecoration';
import { SearchForm } from './SearchForm';

export function Header() {
  return (
    <header className="bg-red-primary">
      <div
        className={cn(
          'max-w-[1440px] mx-auto my-0 pt-[18px] desktop:pt-8 pb-5 desktop:pb-6 px-[26px] desktop:pl-9 desktop:pr-[60px]',
          'flex flex-col desktop:flex-row desktop:items-center gap-[10px] desktop:gap-8',
        )}
        style={{
          boxShadow:
            'box-shadow: 0px 45px 250px 20px rgba(0, 0, 0, 0.15) inset',
        }}
      >
        <div className="flex items-center justify-between flex-1">
          <Link to="/">
            <img
              src={logo}
              alt="Pokéstore Logo"
              className="desktop:w-[312px] desktop:h-[78px]"
            />
          </Link>

          <button className="relative">
            <img
              src={cartIcon}
              alt="Cart"
              className="desktop:w-14 desktop:h-14"
            />

            <div
              className={cn(
                'w-6 h-[22px] bg-[#FFE031] flex justify-center items-center rounded-full',
                'absolute bottom-[28px] desktop:bottom-10 left-[30px] desktop:left-10',
                'drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
              )}
            >
              <span className="text-xs text-[#3564AF]">1</span>
            </div>
          </button>
        </div>

        <SearchForm />
      </div>

      <LineDecoration />
    </header>
  );
}