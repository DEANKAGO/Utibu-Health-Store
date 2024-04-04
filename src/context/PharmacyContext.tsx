import {createContext, ReactNode, useContext, useState} from 'react';
import {Product} from '../utibuData/data';

type PharmacyCartProps = {
  children: ReactNode;
};

export type CartProduct = Product & {
  count: number;
  total: number;
};

type PharmacyContext = {
  addToCart: (product: CartProduct) => void;
  removeFromCart: (id: number) => void;
  getCartTotal: () => number;
  clearCart: () => void;
  cartProducts: CartProduct[];
};

const PharmacyContext = createContext({} as PharmacyContext);

export function usePharmacyContext() {
  return useContext(PharmacyContext);
}

export function PharmacyCart({children}: PharmacyCartProps) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addToCart = (product: CartProduct) => {
    setCartProducts(products => {
      const existingProduct = products.find(p => p.id === product.id);
      if (existingProduct) {
        existingProduct.count = existingProduct.count + product.count;
        existingProduct.total = existingProduct.total + product.total;
        return products;
      } else {
        return [product, ...products];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartProducts(products => products.filter(p => p.id !== id));
  };

  const clearCart = () => setCartProducts([]);

  const getCartTotal = () => {
    return (
      cartProducts.reduce((total, product) => total + product.total, 0) || 0
    );
  };

  return (
    <PharmacyContext.Provider
      value={{
        addToCart,
        removeFromCart,
        getCartTotal,
        cartProducts,
        clearCart,
      }}>
      {children}
    </PharmacyContext.Provider>
  );
}
