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
    <main className="pt-[34px] pb-[18px] px-3 flex flex-col desktop:flex-row desktop:justify-center gap-7 desktop:gap-10">
      {!hasCartItems && (
        <div
          className={cn(
            'desktop:w-[870px] pt-[14px] desktop:pt-5 pb-5 desktop:pb-9 px-7 desktop:px-10',
            'bg-white rounded-[30px] shadow-[1px_2px_4px_0_rgba(0,0,0,0.4)]',
          )}
        >
          <strong className="text-[18px] desktop:text-2xl block">cart</strong>
          <img
            src={pokeballs}
            alt="Pokéballs"
            className="desktop:w-[332px] h-[112px] mx-auto"
          />

          <p className="mt-6 text-[10px] desktop:text-base text-center opacity-60">
            there is no pokémon here..
          </p>
          <p className="text-[10px] desktop:text-base text-center opacity-60">
            Gotta catch&apos;em all!
          </p>
        </div>
      )}

      {hasCartItems && (
        <div
          className={cn(
            'pt-[14px] desktop:pt-5 px-7 desktop:px-10',
            'bg-white rounded-[30px] shadow-[1px_2px_4px_0_rgba(0,0,0,0.4)]',
          )}
        >
          <strong className="text-[18px] desktop:text-2xl block">cart</strong>

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
