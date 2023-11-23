import cartIcon from '../assets/icons/cart.svg';
import pokeball from '../assets/pokeball.svg';
import { Modal } from '../components/Modal';
import { useCart } from '../hooks/useCart';
import { Pokemon } from '../types/pokemon';
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
    addCartItem(id, name);
  }

  return (
    <Modal open={open}>
      <div
        className={cn(
          'w-[400px] desktop:w-[818px] pt-12 pb-8 px-10 flex flex-col desktop:flex-row desktop:gap-[30px]',
          'bg-white rounded-[30px] relative',
        )}
      >
        <button
          onClick={onClose}
          className="flex items-center justify-center absolute top-6 right-5"
        >
          <span className="text-2xl opacity-60">X</span>
        </button>

        <div className="flex justify-center">
          <img
            src={sprite || pokeball}
            alt={name}
            className="w-[200px] desktop:w-[272px] h-[200px] desktop:h-[272px]"
          />
        </div>

        <div className="flex-1">
          <div className="mt-5 flex flex-col items-center desktop:items-start">
            <span className="text-[20px] desktop:text-[30px]">{name}</span>

            <span className="hidden desktop:block opacity-60">
              {priceFormatter(price)}
            </span>

            <div className="flex gap-1 desktop:gap-2 desktop:mt-[14px]">
              {types.map((type) => (
                <span
                  key={type.name}
                  className={cn(
                    'w-[88px] desktop:w-[98px] h-6 desktop:h-7 flex justify-center items-center',
                    'text-[10px] desktop:text-xs text-white uppercase',
                    'border border-solid border-[#000] rounded-[30px]',
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

          <div className="mt-7 desktop:mt-9 flex justify-center desktop:justify-end ">
            <button
              className="w-[210px] h-11 flex items-center justify-center gap-[10px] bg-red-primary rounded-[30px]"
              onClick={handleAddCartItem}
            >
              <img src={cartIcon} alt="Cart" className="w-[30px] h-[30px]" />
              <span className="text-xs text-white">add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
