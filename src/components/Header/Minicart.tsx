import { useNavigate } from 'react-router-dom';

import cartIcon from '../../assets/icons/cart.svg';
import { useCart } from '../../hooks/useCart';
import { cn } from '../../utils/cn';

export function Minicart() {
  const navigate = useNavigate();

  const { hasCartItems, totalizers } = useCart();

  function handleCheckoutNavigate() {
    navigate('/checkout');
  }

  return (
    <button className="relative" onClick={handleCheckoutNavigate}>
      <img src={cartIcon} alt="Cart" className="desktop:h-14 desktop:w-14" />

      {hasCartItems && (
        <div
          className={cn(
            'flex h-[22px] w-6 items-center justify-center rounded-full bg-[#FFE031]',
            'absolute bottom-[28px] left-[30px] desktop:bottom-10 desktop:left-10',
            'drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
          )}
        >
          <span className="text-xs text-[#3564AF]">{totalizers.quantity}</span>
        </div>
      )}
    </button>
  );
}
