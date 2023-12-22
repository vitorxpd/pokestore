import cartIcon from '../assets/icons/cart.svg';
import pokeball from '../assets/pokeball.svg';
import { Pokemon } from '../interfaces/Pokemon';
import { cn } from '../utils/cn';
import { priceFormatter } from '../utils/priceFormatter';

interface CardProps {
  pokemon: Pokemon;
  onOpenModal: (pokemon: Pokemon) => void;
}

export function PokemonCard({ pokemon, onOpenModal }: CardProps) {
  const { id, name, price, sprite, types } = pokemon;

  function handleOpenModal() {
    onOpenModal(pokemon);
  }

  return (
    <li className="flex w-[180px] flex-col items-center rounded-[30px] px-[22px] pb-4 pt-3 shadow-[1px_2px_4px_0_rgba(0,0,0,0.40)] desktop:w-[275px]">
      <div
        className="h-[92px] w-[92px] rounded-full desktop:h-[142px] desktop:w-[142px]"
        style={{
          backgroundColor: types[0].color,
        }}
      >
        <img
          src={sprite || pokeball}
          alt={name}
          className="h-[92px] w-[92px] desktop:h-[142px] desktop:w-[142px]"
        />
      </div>

      <div className="mt-[10px] flex gap-2 desktop:mt-4 desktop:gap-3">
        <span className="text-[10px] desktop:text-sm">{name}</span>
        <span className="text-[10px] opacity-60 desktop:text-sm">#{id}</span>
      </div>

      <div className="mt-[10px] flex gap-1 desktop:mt-[14px]">
        {types.map((type) => (
          <div
            key={type.name}
            className={cn(
              'flex h-[18px] w-14 items-center justify-center px-[10px] py-1 desktop:h-7 desktop:w-[90px] desktop:px-4 desktop:py-2',
              'rounded-[30px] border border-solid border-black',
              'shadow-[0_0_2px_3px_rgba(255,255,255,0.80)_inset]',
            )}
            style={{
              backgroundColor: type.color,
            }}
          >
            <span className="text-[6px] uppercase text-white desktop:text-[10px]">
              {type.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-[10px] desktop:mt-4">
        <span className="text-[10px] opacity-60 desktop:text-sm">
          {priceFormatter(price)}
        </span>
      </div>

      <button
        className={cn(
          'mt-4 flex h-7 w-full items-center justify-center gap-1 px-3 py-1 desktop:mt-6 desktop:h-11 desktop:gap-3',
          'rounded-[30px] bg-red-primary',
        )}
        onClick={handleOpenModal}
      >
        <img
          src={cartIcon}
          alt="Cart"
          className="h-5 w-5 desktop:h-[30px] desktop:w-[30px]"
        />
        <span className="text-[8px] text-white desktop:text-xs">
          add to cart
        </span>
      </button>
    </li>
  );
}
