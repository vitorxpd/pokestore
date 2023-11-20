import cartIcon from '../assets/icons/cart.svg';
import magnifierIcon from '../assets/icons/magnifier.svg';
import logo from '../assets/pokestore.svg';
import { cn } from '../utils/cn';

export function Header() {
  return (
    <header>
      <div
        className="pt-[18px] pb-5 px-[26px] bg-red-primary flex flex-col gap-[10px]"
        style={{
          boxShadow:
            'box-shadow: 0px 45px 250px 20px rgba(0, 0, 0, 0.15) inset',
        }}
      >
        <div className="flex items-center justify-between">
          <img src={logo} alt="Pokéstore Logo" />

          <button className="relative">
            <img src={cartIcon} alt="Cart" />

            <div
              className={cn(
                'w-6 h-[22px] bg-[#FFE031] flex justify-center items-center rounded-full',
                'absolute bottom-[28px] left-[30px]',
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
              'w-full h-9 py-3 pl-4 pr-[50px] rounded-[30px]',
              'text-[10px] placeholder:text-[10px] placeholder:text-[#B0B0B0] outline-none',
            )}
          />

          <img
            src={magnifierIcon}
            alt="Search"
            className="absolute top-[6px] right-3"
          />
        </div>
      </div>

      <div
        className="h-[30px] bg-[#262628] relative"
        style={{
          boxShadow:
            '0px 10px 5px 2px rgba(255, 255, 255, 0.50), 0px 0px 10px 6px #000 inset',
        }}
      >
        <div
          className={cn(
            'w-[52px] h-[52px] bg-[#262628] flex justify-center items-center rounded-full',
            'absolute -top-[10px] left-[50%] -translate-x-1/2',
            'shadow-[0_0_5px_3px_#000_inset]',
          )}
        >
          <div
            className={cn(
              'w-10 h-10 bg-white flex justify-center items-center rounded-full',
              'shadow-[-3px_-4px_4px_2px_rgba(0,0,0,0.25)_inset]',
            )}
          >
            <div
              className={cn(
                'w-[22px] h-[22px] bg-white rounded-full',
                'drop-shadow-[2px_7px_6px_rgba(0,0,0,0.25)]',
              )}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
