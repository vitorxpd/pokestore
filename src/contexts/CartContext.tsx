import { ReactNode, createContext, useCallback, useState } from 'react';

import { feedback } from '../utils/feedback';

interface CartItems {
  id: number;
  name: string;
}

interface CartContextProps {
  cartItems: CartItems[];
  cartCount: number;
  addCartItem: (id: number, name: string) => void;
  removeCartItem: (id: number) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const cartCount = cartItems.length;

  const addCartItem = useCallback(
    (id: number, name: string) => {
      const hasItem = cartItems.find((item) => item.id === id);

      if (!hasItem) {
        setCartItems((prevState) => [...prevState, { id, name }]);
        feedback(`${name} adicionado!`);
      } else {
        feedback('Você já adicionou este Pokémon!');
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
