import cartIcon from '../../assets/icons/cart.svg';
import { useCart } from '../../hooks/useCart';
import { cn } from '../../utils/cn';
import { priceFormatter } from '../../utils/priceFormatter';

interface SummaryProps {
  onOpenBuyModal: () => void;
}

export function Summary({ onOpenBuyModal }: SummaryProps) {
  const { hasCartItems, totalizers, clearCart } = useCart();

  return (
    <div
      className={cn(
        'desktop:w-[410px] pt-[14px] desktop:pt-5 pb-5 desktop:pb-9 px-7 desktop:px-10',
        'bg-white rounded-[30px] shadow-[1px_2px_4px_0_rgba(0,0,0,0.4)]',
      )}
    >
      <strong className="text-[18px] desktop:text-2xl block">summary</strong>

      <div className="w-[340px] mt-[30px] desktop:mt-9 mx-auto flex flex-col gap-2">
        <div className="flex gap-1">
          <span className="text-xs desktop:text-base opacity-60">
            quantity:
          </span>

          <span className="text-xs desktop:text-base opacity-80">
            {totalizers.quantity} pokemon
          </span>
        </div>

        <div className="flex gap-1">
          <span className="text-xs opacity-60">total:</span>
          <span className="text-xs opacity-80">
            {priceFormatter(totalizers.value)}
          </span>
        </div>
      </div>

      <div className="mt-[14px] desktop:mt-9 flex flex-col items-center gap-[10px] desktop:gap-3">
        <button
          className={cn(
            'w-[288px] desktop:w[316px] h-8 desktop:h-10 flex justify-center items-center',
            'bg-white border-[3px] border-solid border-red-primary rounded-[30px]',
            'disabled:opacity-50 disabled:cursor-not-allowed',
          )}
          onClick={clearCart}
          disabled={!hasCartItems}
        >
          <span className="text-[10px] desktop:text-xs text-red-primary uppercase">
            remove all pokemons
          </span>
        </button>

        <button
          className={cn(
            'w-[288px] desktop:w[316px] h-8 desktop:h-10 flex justify-center items-center gap-8 desktop:gap-10',
            'bg-red-primary border-[3px] border-solid border-red-primary rounded-[30px]',
            'disabled:opacity-50 disabled:cursor-not-allowed',
          )}
          onClick={onOpenBuyModal}
          disabled={!hasCartItems}
        >
          <img
            src={cartIcon}
            alt="Cart"
            className="w-6 desktop:w-[30px] h-6 desktop:h-[30px]"
          />
          <span className="text-[10px] desktop:text-xs text-white uppercase">
            buy
          </span>
        </button>
      </div>
    </div>
  );
}
