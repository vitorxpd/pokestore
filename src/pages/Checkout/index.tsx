import cartIcon from '../../assets/icons/cart.svg';
import pokeballs from '../../assets/pokeballs.svg';
import { useCart } from '../../hooks/useCart';
import { cn } from '../../utils/cn';

export function Checkout() {
  const { cartCount } = useCart();

  return (
    <main className="pt-[34px] px-3 flex flex-col gap-7">
      {cartCount === 0 && (
        <div className="pt-[14px] pb-5 px-7 bg-white rounded-[30px] shadow-[1px_2px_4px_0_rgba(0,0,0,0.4)]">
          <strong className="text-[18px] block">cart</strong>
          <img src={pokeballs} alt="Pokéballs" className="mx-auto" />

          <p className="mt-6 text-[10px] text-center opacity-60">
            there is no pokémon here..
          </p>
          <p className="text-[10px] text-center opacity-60">
            Gotta catch&apos;em all!
          </p>
        </div>
      )}

      <div className="pt-[14px] pb-5 px-7 bg-white rounded-[30px] shadow-[1px_2px_4px_0_rgba(0,0,0,0.4)]">
        <strong className="text-[18px] block">summary</strong>

        <div className="w-[340px] mt-[30px] mx-auto flex flex-col gap-2">
          <div className="flex gap-1">
            <span className="text-xs opacity-60">quantity:</span>
            <span className="text-xs opacity-80">x pokemon</span>
          </div>

          <div className="flex gap-1">
            <span className="text-xs opacity-60">total:</span>
            <span className="text-xs opacity-80">R$ 1000</span>
          </div>
        </div>

        <div className="mt-[14px] flex flex-col items-center gap-[10px]">
          <button
            className={cn(
              ' w-[288px] h-8 flex justify-center items-center',
              'bg-white border-[3px] border-solid border-red-primary rounded-[30px]',
              cartCount === 0 && 'opacity-50',
            )}
          >
            <span className="text-[10px] text-red-primary uppercase">
              remove all pokemons
            </span>
          </button>

          <button
            className={cn(
              ' w-[288px] h-8 flex justify-center items-center gap-8',
              'bg-red-primary border-[3px] border-solid border-red-primary rounded-[30px]',
              cartCount === 0 && 'opacity-50',
            )}
          >
            <img src={cartIcon} alt="Cart" className="w-6 h-6" />
            <span className="text-[10px] text-white uppercase">buy</span>
          </button>
        </div>
      </div>
    </main>
  );
}
