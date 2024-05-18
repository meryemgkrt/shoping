import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /* item amount state */

  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(()=>{
    const total =cart.reduce((accumulator, currentItem)=>{
      return accumulator + currentItem.price * currentItem.amount
    },0)
   setTotal(total) 
  })

useEffect(()=>{
  if(cart){
const amount = cart.reduce((accumulator, currentItem)=>{
  return accumulator + currentItem.amount
}, 0)
setItemAmount(amount)
  }
},[cart])

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 }; // Burada düzeltme yapıldı
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      addToCart(item, id);
    }
  };
  

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id); 
    if (cartItem) {
      if (cartItem.amount < 2) { 
        removeFromCart(id);
      } else { 
        const newCart = cart.map((item) => {
          if (item.id === id) {
            return { ...item, amount: item.amount - 1 }; 
          } else {
            return item; 
          }
        });
        setCart(newCart); 
      }
    }
  };
  

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
       
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
