import pokeballs from '../../assets/pokeballs.svg';
import { useCart } from '../../hooks/useCart';
import { cn } from '../../utils/cn';

import { BuyModal } from './BuyModal';
import { CartItem } from './CartItem';
import { Summary } from './Summary';
import { useCheckoutController } from './useCheckoutController';

export function Checkout() {
  const { buyModalIsOpen, openBuyModal, reset } = useCheckoutController();

  const { cartItems, hasCartItems } = useCart();

  return (
    <main className="flex flex-col gap-7 px-3 pb-[18px] pt-[34px] desktop:flex-row desktop:justify-center desktop:gap-10">
      {!hasCartItems && (
        <div
          className={cn(
            'px-7 pb-5 pt-[14px] desktop:w-[870px] desktop:px-10 desktop:pb-9 desktop:pt-5',
            'rounded-[30px] bg-white shadow-[1px_2px_4px_0_rgba(0,0,0,0.4)]',
          )}
        >
          <strong className="block text-[18px] desktop:text-2xl">cart</strong>
          <img
            src={pokeballs}
            alt="Pokeballs"
            className="mx-auto h-[112px] desktop:w-[332px]"
          />

          <p className="mt-6 text-center text-[10px] opacity-60 desktop:text-base">
            there is no pokemon here..
          </p>
          <p className="text-center text-[10px] opacity-60 desktop:text-base">
            Gotta catch&apos;em all!
          </p>
        </div>
      )}

      {hasCartItems && (
        <div
          className={cn(
            'px-7 pt-[14px] desktop:px-10 desktop:pt-5',
            'rounded-[30px] bg-white shadow-[1px_2px_4px_0_rgba(0,0,0,0.4)]',
          )}
        >
          <strong className="block text-[18px] desktop:text-2xl">cart</strong>

          <ul className="mt-2">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
        </div>
      )}

      <Summary onOpenBuyModal={openBuyModal} />

      <BuyModal isOpen={buyModalIsOpen} onReset={reset} />
    </main>
  );
}
