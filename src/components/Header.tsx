import cartIcon from '../assets/icons/cart.svg';
import magnifierIcon from '../assets/icons/magnifier.svg';
import logo from '../assets/pokestore.svg';
import { cn } from '../utils/cn';

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
          <img
            src={logo}
            alt="Pokéstore Logo"
            className="desktop:w-[312px] desktop:h-[78px]"
          />

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

        <div className="relative">
          <input
            placeholder="search for your pokemon here"
            className={cn(
              'w-full desktop:w-[416px] h-9 desktop:h-[42px] py-3 pl-4 desktop:pl-5 pr-[52px] desktop:pr-15',
              'text-[10px] desktop:text-xs placeholder:text-[10px] desktop:placeholder:text-xs placeholder:text-[#B0B0B0]',
              'border border-[#E0E0E0] rounded-[30px] outline-none',
            )}
          />

          <img
            src={magnifierIcon}
            alt="Search"
            className="desktop:w-[30px] desktop:h-[30px] absolute top-[6px] right-3"
          />
        </div>
      </div>

      <div
        className="h-[30px] desktop:h-9 bg-[#262628] relative"
        style={{
          boxShadow:
            '0px 10px 5px 2px rgba(255, 255, 255, 0.50), 0px 0px 10px 6px #000 inset',
        }}
      >
        <div
          className={cn(
            'w-[52px] h-[52px] desktop:w-20 desktop:h-20 bg-[#262628] flex justify-center items-center rounded-full',
            'absolute -top-[11px] desktop:-top-[22px] left-[50%] -translate-x-1/2',
            'shadow-[0_0_5px_3px_#000_inset]',
          )}
        >
          <div
            className={cn(
              'w-10 h-10 desktop:w-[60px] desktop:h-[60px] bg-white flex justify-center items-center rounded-full',
              'shadow-[-3px_-4px_4px_2px_rgba(0,0,0,0.25)_inset]',
            )}
          >
            <div
              className={cn(
                'w-[22px] h-[22px] desktop:w-8 desktop:h-8 bg-white rounded-full',
                'drop-shadow-[2px_7px_6px_rgba(0,0,0,0.25)]',
              )}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
