import {createContext, ReactNode, useContext, useState} from 'react';

type PharmacyCartProps = {
  children: ReactNode;
};

type PharmacyContext = {
  increaseProductCart: (id: number) => void;
  //   decreaseProductCart: (id: number) => void;
  //   removeProduct: (id: number) => void;
  //   productQuantity: (id: number) => number;
};

type CartProduct = {
  id: number;
  quantity: number;
};

const PharmacyContext = createContext({} as PharmacyContext);

export function usePharmacyContext() {
  return useContext(PharmacyContext);
}

export function PharmacyCart({children}: PharmacyCartProps) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  function increaseProductCart(id: number) {
    setCartProducts(availableProducts => {
      if (availableProducts.find(product => product.id === id) === null) {
        return [...availableProducts, {id, quantity: 1}];
      } else {
        return availableProducts.map(product => {
          if (product.id === id) {
            return {...product, quantity: product.quantity + 1};
          } else {
            return product;
          }
        });
      }
    });
  }

  function decreaseProductCart(id: number) {
    setCartProducts(availableProducts => {
      if (
        availableProducts.find(product => product.id === id)?.quantity === 1
      ) {
        return availableProducts.filter(product => product.id == id);
      } else {
        return availableProducts.map(product => {
          if (product.id === id) {
            return {...product, quantity: product.quantity - 1};
          } else {
            return product;
          }
        });
      }
    });
  }

  return (
    <PharmacyContext.Provider
      value={{
        increaseProductCart,
        decreaseProductCart,
        // removeProduct,
        // productQuantity,
      }}>
      {children}
    </PharmacyContext.Provider>
  );
}
