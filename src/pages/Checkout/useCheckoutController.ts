import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../hooks/useCart';

export function useCheckoutController() {
  const [buyModalIsOpen, setBuyModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const { clearCart } = useCart();

  function openBuyModal() {
    setBuyModalIsOpen(true);
  }

  function closeBuyModal() {
    setBuyModalIsOpen(false);
  }

  function reset() {
    navigate('/');
    closeBuyModal();
    clearCart();
  }

  return {
    buyModalIsOpen,
    openBuyModal,
    reset,
  };
}
