import pokeball from '../../assets/pokeball.svg';
import { CartItem } from '../../contexts/CartContext';
import { useCart } from '../../hooks/useCart';
import { cn } from '../../utils/cn';
import { priceFormatter } from '../../utils/priceFormatter';

export interface CartItemProps {
  item: CartItem;
}

export function CartItem({ item }: CartItemProps) {
  const {
    base_experience,
    height,
    id,
    name,
    priceDefinition,
    quantity,
    sprite,
    types,
    weight,
  } = item;

  const { changeItemQuantity } = useCart();

  return (
    <li
      className={cn(
        'flex gap-5 pb-5 pt-[10px] desktop:gap-[38px]',
        'border-b border-solid border-black border-opacity-20 last:border-0',
      )}
    >
      <img src={sprite || pokeball} alt={name} className="h-[98px] w-[98px]" />

      <div className="flex flex-col gap-10 desktop:flex-row desktop:gap-5">
        <div className="flex flex-wrap items-center gap-5 desktop:gap-5">
          <div className="flex w-[110px] flex-col desktop:w-[182px] desktop:gap-2">
            <span className="text-[10px] desktop:text-base">{name}</span>

            <div className="flex flex-col flex-wrap gap-1 desktop:flex-row">
              {types.map((type) => (
                <span
                  key={type.name}
                  className={cn(
                    'flex h-[20px] w-[60px] items-center justify-center',
                    'text-[6px] uppercase text-white',
                    'rounded-[30px] border border-solid border-black',
                    'shadow-[0_0_2px_3px_rgba(255,255,255,0.80)_inset]',
                  )}
                  style={{ backgroundColor: type.color }}
                >
                  {type.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1 desktop:w-[230px]">
            <div className="flex flex-wrap">
              <span className="text-[6px] opacity-60 desktop:text-[10px]">
                key:{' '}
              </span>
              <span className="text-[6px] desktop:text-[10px]">#{id}</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-[6px] opacity-60 desktop:text-[10px]">
                base_experience:{' '}
              </span>
              <span className="text-[6px] desktop:text-[10px]">
                {base_experience}exp
              </span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-[6px] opacity-60 desktop:text-[10px]">
                height:{' '}
              </span>
              <span className="text-[6px] desktop:text-[10px]">{height}m</span>
            </div>

            <div className="flex flex-wrap">
              <span className="text-[6px] opacity-60 desktop:text-[10px]">
                weight:{' '}
              </span>
              <span className="text-[6px] desktop:text-[10px]">{weight}kg</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-5 desktop:gap-[38px]">
          <div className="flex w-[110px] desktop:w-auto">
            <button
              className="flex h-5 w-5 items-center justify-center bg-red-primary desktop:h-[30px] desktop:w-[30px]"
              onClick={() => changeItemQuantity(id, 'decrement')}
            >
              <span className="text-[10px] text-white">-</span>
            </button>

            <input
              value={quantity}
              className={cn(
                'h-5 w-6 desktop:h-[30px] desktop:w-[34px]',
                'p-0 text-center text-[10px] text-black',
                'border border-solid border-black border-opacity-20',
              )}
              disabled
            />

            <button
              className="flex h-5 w-5 items-center justify-center bg-red-primary desktop:h-[30px] desktop:w-[30px]"
              onClick={() => changeItemQuantity(id, 'increment')}
            >
              <span className="text-[10px] text-white">+</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="text-[8px] opacity-60 desktop:text-[10px]">
              price:{' '}
            </span>

            <span className="text-[8px] desktop:text-[10px]">
              {priceFormatter(priceDefinition.total)}
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}
