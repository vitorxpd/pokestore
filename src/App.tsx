import { Toaster } from 'react-hot-toast';

import { CartProvider } from './contexts/CartContext';
import { Router } from './Router';

import './index.css';

export function App() {
  return (
    <CartProvider>
      <Router />
      <Toaster />
    </CartProvider>
  );
}
