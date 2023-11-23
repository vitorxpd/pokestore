import { ReactNode, createContext, useCallback, useState } from 'react';
import toast from 'react-hot-toast';

interface CartItems {
  id: number;
  name: string;
}

interface CartContextProps {
  cartItems: CartItems[];
  addCartItem: (id: number, name: string) => void;
  removeCartItem: (id: number) => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  const addCartItem = useCallback(
    (id: number, name: string) => {
      const hasItem = cartItems.find((item) => item.id === id);

      if (!hasItem) {
        setCartItems((prevState) => [...prevState, { id, name }]);
      } else {
        toast('Você já adicionou este produto!', {
          className: 'text-[10px] desktop:text-sm text-center',
        });
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
    <CartContext.Provider value={{ cartItems, addCartItem, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
}
