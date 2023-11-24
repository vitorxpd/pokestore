import cartIcon from '../assets/icons/cart.svg';
import pokeball from '../assets/pokeball.svg';
import { Pokemon } from '../types/pokemon';
import { cn } from '../utils/cn';
import { priceFormatter } from '../utils/priceFormatter';

interface CardProps {
  pokemon: Pokemon;
  onOpenModal: (pokemon: Pokemon) => void;
}

export function PokemonCard({ pokemon, onOpenModal }: CardProps) {
  const { base_experience, height, id, name, price, sprite, types, weight } =
    pokemon;

  function handleOpenModal() {
    onOpenModal({
      base_experience,
      height,
      id,
      name,
      price,
      sprite,
      types,
      weight,
    });
  }

  return (
    <li className="w-[180px] desktop:w-[275px] pt-3 pb-4 px-[22px] flex flex-col items-center shadow-[1px_2px_4px_0_rgba(0,0,0,0.40)] rounded-[30px]">
      <div
        className="w-[92px] desktop:w-[142px] h-[92px] desktop:h-[142px] rounded-full"
        style={{
          backgroundColor: types[0].color,
        }}
      >
        <img
          src={sprite || pokeball}
          alt={name}
          className="w-[92px] h-[92px] desktop:w-[142px] desktop:h-[142px]"
        />
      </div>

      <div className="mt-[10px] desktop:mt-4 flex gap-2 desktop:gap-3">
        <span className="text-[10px] desktop:text-sm">{name}</span>
        <span className="text-[10px] desktop:text-sm opacity-60">#{id}</span>
      </div>

      <div className="mt-[10px] desktop:mt-[14px] flex gap-1">
        {types.map((type) => (
          <div
            key={type.name}
            className={cn(
              'w-14 desktop:w-[90px] h-[18px] desktop:h-7 px-[10px] desktop:px-4 py-1 desktop:py-2 flex justify-center items-center',
              'border border-solid border-black rounded-[30px]',
              'shadow-[0_0_2px_3px_rgba(255,255,255,0.80)_inset]',
            )}
            style={{
              backgroundColor: type.color,
            }}
          >
            <span className="text-[6px] desktop:text-[10px] text-white uppercase">
              {type.name}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-[10px] desktop:mt-4">
        <span className="text-[10px] desktop:text-sm opacity-60">
          {priceFormatter(price)}
        </span>
      </div>

      <button
        className={cn(
          'w-full h-7 desktop:h-11 mt-4 desktop:mt-6 px-3 py-1 flex justify-center items-center gap-1 desktop:gap-3',
          'bg-red-primary rounded-[30px]',
        )}
        onClick={handleOpenModal}
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
