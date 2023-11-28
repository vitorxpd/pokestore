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
        'px-7 pb-5 pt-[14px] desktop:w-[410px] desktop:px-10 desktop:pb-9 desktop:pt-5',
        'rounded-[30px] bg-white shadow-[1px_2px_4px_0_rgba(0,0,0,0.4)]',
      )}
    >
      <strong className="block text-[18px] desktop:text-2xl">summary</strong>

      <div className="mx-auto mt-[30px] flex w-[340px] flex-col gap-2 desktop:mt-9">
        <div className="flex gap-1">
          <span className="text-xs opacity-60 desktop:text-base">
            quantity:
          </span>

          <span className="text-xs opacity-80 desktop:text-base">
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

      <div className="mt-[14px] flex flex-col items-center gap-[10px] desktop:mt-9 desktop:gap-3">
        <button
          className={cn(
            'desktop:w[316px] flex h-8 w-[288px] items-center justify-center desktop:h-10',
            'rounded-[30px] border-[3px] border-solid border-red-primary bg-white',
            'disabled:cursor-not-allowed disabled:opacity-50',
          )}
          onClick={clearCart}
          disabled={!hasCartItems}
        >
          <span className="text-[10px] uppercase text-red-primary desktop:text-xs">
            remove all pokemons
          </span>
        </button>

        <button
          className={cn(
            'desktop:w[316px] flex h-8 w-[288px] items-center justify-center gap-8 desktop:h-10 desktop:gap-10',
            'rounded-[30px] border-[3px] border-solid border-red-primary bg-red-primary',
            'disabled:cursor-not-allowed disabled:opacity-50',
          )}
          onClick={onOpenBuyModal}
          disabled={!hasCartItems}
        >
          <img
            src={cartIcon}
            alt="Cart"
            className="h-6 w-6 desktop:h-[30px] desktop:w-[30px]"
          />
          <span className="text-[10px] uppercase text-white desktop:text-xs">
            buy
          </span>
        </button>
      </div>
    </div>
  );
}
