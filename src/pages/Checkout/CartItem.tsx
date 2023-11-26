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
        'pt-[10px] pb-5 flex gap-5 desktop:gap-[38px]',
        'border-b last:border-0 border-solid border-black border-opacity-20',
      )}
    >
      <img src={sprite || pokeball} alt={name} className="w-[98px] h-[98px]" />

      <div className="flex flex-col desktop:flex-row gap-10 desktop:gap-[38px]">
        <div className="flex items-center gap-5 desktop:gap-[38px]">
          <div className="w-[110px] desktop:w-[182px] flex flex-col desktop:gap-2">
            <span className="text-[10px] desktop:text-base">{name}</span>

            <div className="flex flex-col desktop:flex-row flex-wrap gap-1">
              {types.map((type) => (
                <span
                  key={type.name}
                  className={cn(
                    'w-[60px] h-[20px] flex justify-center items-center',
                    'text-[6px] text-white uppercase',
                    'border border-solid border-black rounded-[30px]',
                    'shadow-[0_0_2px_3px_rgba(255,255,255,0.80)_inset]',
                  )}
                  style={{ backgroundColor: type.color }}
                >
                  {type.name}
                </span>
              ))}
            </div>
          </div>

          <div className="desktop:w-[230px] flex flex-col gap-1">
            <div className="flex">
              <span className="text-[6px] desktop:text-[10px] opacity-60">
                key:{' '}
              </span>
              <span className="text-[6px] desktop:text-[10px]">#{id}</span>
            </div>

            <div className="flex">
              <span className="text-[6px] desktop:text-[10px] opacity-60">
                base_experience:{' '}
              </span>
              <span className="text-[6px] desktop:text-[10px]">
                {base_experience}exp
              </span>
            </div>

            <div className="flex">
              <span className="text-[6px] desktop:text-[10px] opacity-60">
                height:{' '}
              </span>
              <span className="text-[6px] desktop:text-[10px]">{height}m</span>
            </div>

            <div className="flex">
              <span className="text-[6px] desktop:text-[10px] opacity-60">
                weight:{' '}
              </span>
              <span className="text-[6px] desktop:text-[10px]">{weight}kg</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 desktop:gap-[38px]">
          <div className="w-[110px] desktop:w-auto flex">
            <button
              className="w-5 desktop:w-[30px] h-5 desktop:h-[30px] flex justify-center items-center bg-red-primary"
              onClick={() => changeItemQuantity(id, 'decrement')}
            >
              <span className="text-white text-[10px]">-</span>
            </button>

            <input
              value={quantity}
              className={cn(
                'w-6 desktop:w-[34px] h-5 desktop:h-[30px]',
                'text-[10px] text-center text-black p-0',
                'border border-solid border-black border-opacity-20',
              )}
              disabled
            />

            <button
              className="w-5 desktop:w-[30px] h-5 desktop:h-[30px] flex justify-center items-center bg-red-primary"
              onClick={() => changeItemQuantity(id, 'increment')}
            >
              <span className="text-white text-[10px]">+</span>
            </button>
          </div>

          <div className="flex gap-2">
            <span className="text-[8px] desktop:text-[10px] opacity-60">
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
