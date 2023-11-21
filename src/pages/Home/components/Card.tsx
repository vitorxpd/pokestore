import cartIcon from '../../../assets/icons/cart.svg';
import pokeball from '../../../assets/images/pokeball.svg';
import { cn } from '../../../utils/cn';

export function Card() {
  return (
    <li className="w-[180px] desktop:w-[275px] pt-3 pb-4 px-[22px] flex flex-col items-center shadow-[1px_2px_4px_0_rgba(0,0,0,0.40)] rounded-[30px]">
      <div
        className="w-[92px] desktop:w-[142px] h-[92px] desktop:h-[142px] rounded-full"
        style={{
          background: 'linear-gradient(146deg, #76FF60 18.83%, #CBF17A 93.56%)',
        }}
      >
        <img
          src={pokeball}
          alt="Pokéball"
          className="desktop:w-[142px] desktop:h-[142px]"
        />
      </div>

      <div className="mt-[10px] desktop:mt-4 flex gap-2 desktop:gap-3">
        <span className="text-[10px] desktop:text-sm">pokemon</span>
        <span className="text-[10px] desktop:text-sm opacity-60">#key</span>
      </div>

      <div className="mt-[10px] desktop:mt-[14px] flex gap-1">
        <div
          className={cn(
            'w-14 desktop:w-[84px] h-[18px] desktop:h-7 px-[10px] desktop:px-4 py-1 desktop:py-2 flex items-center',
            'bg-[#72D211] border border-solid border-[#000] rounded-[30px]',
            'shadow-[0_0_2px_3px_rgba(255,255,255,0.80)_inset]',
          )}
        >
          <span className="text-[6px] desktop:text-[10px] text-white uppercase">
            grass
          </span>
        </div>
      </div>

      <div className="mt-[10px] desktop:mt-4">
        <span className="text-[10px] desktop:text-sm opacity-60">¥ XXXXX</span>
      </div>

      <button
        className={cn(
          'w-full h-7 desktop:h-11 mt-4 desktop:mt-6 px-3 py-1 flex justify-center items-center gap-1 desktop:gap-3',
          'bg-red-primary rounded-[30px]',
        )}
      >
        <img
          src={cartIcon}
          alt="Cart"
          className="w-5 desktop:w-[30px] h-5 desktop:h-[30px]"
        />
        <span className="text-[8px] desktop:text-xs text-white">
          add to cart
        </span>
      </button>
    </li>
  );
}
