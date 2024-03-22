import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContext } from "react";
import axios from "../utils/axios";
export const CartContext = createContext();

export const Cart = ({ children }) => {
  const userId = "65d23b4e2a4c112f98383490";
  const queryClient = useQueryClient();

  const addToCart = ({ itemId, quantity }) => {
    if (!userId) return;
    add.mutate({ userId, itemId, quantity });
  };

  const removeFromCart = (itemId) => {
    if (!userId) return;
    console.log({ itemId });
    remove.mutate({ userId, itemId });
  };

  const clearCart = () => {
    if (!userId) return;
    clear.mutate({ userId });
  };

  const clear = useMutation({
    mutationFn: ({ userId }) => axios.post(`clear/cart/${userId}`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const remove = useMutation({
    mutationFn: ({ userId, itemId }) =>
      axios.post(`remove/cart/${userId}/${itemId}`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const add = useMutation({
    mutationFn: ({ userId, itemId, quantity }) =>
      axios.post(`add/cart/${userId}/${itemId}`, { quantity }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
