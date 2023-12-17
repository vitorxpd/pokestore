import cartIcon from '../assets/icons/cart.svg';
import pokeball from '../assets/pokeball.svg';
import { Modal } from '../components/Modal';
import { useCart } from '../hooks/useCart';
import { Pokemon } from '../interfaces/Pokemon';
import { cn } from '../utils/cn';
import { priceFormatter } from '../utils/priceFormatter';

interface PokemonModalProps {
  pokemon: Pokemon;
  open: boolean;
  onClose: () => void;
}

export function PokemonModal({ pokemon, open, onClose }: PokemonModalProps) {
  const { base_experience, height, id, name, price, sprite, types, weight } =
    pokemon;

  const { addCartItem } = useCart();

  function handleAddCartItem() {
    addCartItem(pokemon);
    onClose();
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div
        className={cn(
          'flex w-[360px] flex-col px-10 pb-8 pt-12 desktop:w-[818px] desktop:flex-row desktop:gap-[30px]',
          'relative rounded-[30px] bg-white',
        )}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-6 flex items-center justify-center"
        >
          <span className="text-2xl opacity-60">X</span>
        </button>

        <div className="flex justify-center">
          <img
            src={sprite || pokeball}
            alt={name}
            className="h-[200px] w-[200px] desktop:h-[272px] desktop:w-[272px]"
          />
        </div>

        <div className="flex-1">
          <div className="mt-5 flex flex-col items-center desktop:items-start">
            <span className="text-[20px] desktop:text-[30px]">{name}</span>

            <span className="hidden opacity-60 desktop:block">
              {priceFormatter(price)}
            </span>

            <div className="flex gap-1 desktop:mt-[14px] desktop:gap-2">
              {types.map((type) => (
                <span
                  key={type.name}
                  className={cn(
                    'flex h-6 w-[88px] items-center justify-center desktop:h-7 desktop:w-[98px]',
                    'text-[10px] uppercase text-white desktop:text-xs',
                    'rounded-[30px] border border-solid border-[#000]',
                    'shadow-[0_0_2px_3px_rgba(255,255,255,0.80)_inset]',
                  )}
                  style={{
                    backgroundColor: type.color,
                  }}
                >
                  {type.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div>
              <span className="opacity-60">key: </span>
              <span>#{id}</span>
            </div>

            <div>
              <span className="opacity-60">base_experience: </span>
              <span>{base_experience}exp</span>
            </div>

            <div>
              <span className="opacity-60">height: </span>
              <span>{height}m</span>
            </div>

            <div>
              <span className="opacity-60">weight: </span>
              <span>{weight}kg</span>
            </div>
          </div>

          <div className="mt-7 flex justify-center desktop:mt-9 desktop:justify-end ">
            <button
              className="flex h-11 w-[210px] items-center justify-center gap-[10px] rounded-[30px] bg-red-primary"
              onClick={handleAddCartItem}
            >
              <img src={cartIcon} alt="Cart" className="h-[30px] w-[30px]" />
              <span className="text-xs text-white">add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
