import { CartProvider } from './contexts/CartContext';
import { Router } from './Router';
import './styles/globals.css';

export function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  );
}
