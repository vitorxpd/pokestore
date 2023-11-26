import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Pokemon } from '../types/pokemon';
import { feedback } from '../utils/feedback';

interface CartContextProps {
  cartItems: Pokemon[];
  cartCount: number;
  addCartItem: (pokemon: Pokemon) => void;
  removeCartItem: (id: number) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Pokemon[]>([]);

  const cartCount = cartItems.length;

  const addCartItem = useCallback(
    (pokemon: Pokemon) => {
      const hasItem = cartItems.find((item) => item.id === pokemon.id);

      if (!hasItem) {
        setCartItems((prevState) => [...prevState, pokemon]);
        feedback(`${pokemon.name} adicionado!`);
      } else {
        feedback('você já adicionou este pokémon!');
      }
    },
    [cartItems],
  );

  const removeCartItem = useCallback(
    (id: number) => {
      const cartFilter = cartItems.filter((item) => item.id !== id);

      setCartItems(cartFilter);
    },
    [cartItems],
  );

  useEffect(() => {}, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addCartItem,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
