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
      <img src={cartIcon} alt="Cart" className="desktop:w-14 desktop:h-14" />

      {hasCartItems && (
        <div
          className={cn(
            'w-6 h-[22px] bg-[#FFE031] flex justify-center items-center rounded-full',
            'absolute bottom-[28px] desktop:bottom-10 left-[30px] desktop:left-10',
            'drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
          )}
        >
          <span className="text-xs text-[#3564AF]">{totalizers.quantity}</span>
        </div>
      )}
    </button>
  );
}
