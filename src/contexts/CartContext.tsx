import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { Pokemon } from '../interfaces/Pokemon';
import { feedback } from '../utils/feedback';

export interface CartItem extends Pokemon {
  quantity: number;
  priceDefinition: {
    total: number;
  };
}

interface Totalizers {
  quantity: number;
  value: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  totalizers: Totalizers;
  hasCartItems: boolean;
  addCartItem: (pokemon: Pokemon) => void;
  changeItemQuantity: (
    id: number,
    operation: 'increment' | 'decrement',
  ) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalizers, setTotalizers] = useState<Totalizers>({
    quantity: 0,
    value: 0,
  });

  const hasCartItems = totalizers.quantity > 0;

  const addCartItem = useCallback(
    (pokemon: Pokemon) => {
      const hasItem = cartItems.find((item) => item.id === pokemon.id);

      if (!hasItem) {
        setCartItems((prevState) => [
          ...prevState,
          {
            ...pokemon,
            quantity: 1,
            priceDefinition: { total: pokemon.price },
          },
        ]);
        feedback(`${pokemon.name} adicionado!`);
      } else {
        feedback('você já adicionou este pokémon!');
      }
    },
    [cartItems],
  );

  const changeItemQuantity = useCallback(
    (id: number, operation: 'increment' | 'decrement') => {
      setCartItems((prevState) => {
        const nextState = prevState.map((state) => {
          if (state.id !== id) {
            return state;
          }

          const increment = state.quantity + 1;
          const decrement = state.quantity > 1 ? state.quantity - 1 : 1;

          if (operation === 'increment') {
            return {
              ...state,
              quantity: increment,
              priceDefinition: { total: state.price * increment },
            };
          }

          return {
            ...state,
            quantity: decrement,
            priceDefinition: { total: state.price * decrement },
          };
        });

        return nextState;
      });
    },
    [],
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  useEffect(() => {
    const { priceDefinition, quantity } = cartItems.reduce(
      (accumulator, currentValue) => {
        return {
          quantity: accumulator.quantity + currentValue.quantity,
          priceDefinition: {
            total:
              accumulator.priceDefinition.total +
              currentValue.priceDefinition.total,
          },
        };
      },
      {
        quantity: 0,
        priceDefinition: {
          total: 0,
        },
      },
    );

    setTotalizers({
      quantity,
      value: priceDefinition.total,
    });
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalizers,
        hasCartItems,
        addCartItem,
        changeItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
