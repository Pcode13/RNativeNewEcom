import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from 'react';

export type Product = {
  id: number;
  title: string;
  description: string;
  category: string;
  poster: string;
  price: {
    mrp: number;
    sale: number;
  };
  images: string[];
  bulletPoints: string[];
};
type cartItem = {
  product: Product;
  count: number;
};

interface ICartContext {
  items: cartItem[];
  updateCart(product: Product, qty: number): void;
  removeFromCart(product: Product): void;
  clearCart(): void;
  countAllItems(): number;
  countTotalPrice(): string;
}
const CartContext = createContext<ICartContext | null>(null);

interface Props {
  children?: ReactNode;
}
const CardProvider: FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);
  console.log('cartItem', cartItems);
  const updateCart = (product: Product, qty: number) => {
    const finalCartItems = [...cartItems];
    const index = finalCartItems.findIndex(
      item => item.product.id === product.id,
    );
    if (index === -1) {
      finalCartItems.push({ count: qty, product });
    } else {
      finalCartItems[index].count += qty;
    }

    if (finalCartItems[index]?.count <= 0) {
      removeFromCart(product);
    } else {
      setCartItems(finalCartItems);
    }
  };

  const removeFromCart = (product: Product) => {};
  //      const clearCart=()=>{}
  const countAllItems = () => {
    return cartItems.reduce((acc, cartItem) => (acc += cartItem.count), 0);

    // return cartItems.reduce((acc, cartItem) => (acc += cartItem.count), 0);
  };
  //  const  countTotalPrice=()=>{}

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        updateCart,
        removeFromCart,
        // clearCart,
        countAllItems,
        // countTotalPrice
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CardProvider;

export const useCart = () => useContext(CartContext);
