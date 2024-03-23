import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContext } from "react";
import axios from "../utils/axios";
import toast from "react-hot-toast";
export const CartContext = createContext();

export const Cart = ({ children }) => {
  const userId = "65d23b4e2a4c112f98383490";
  const queryClient = useQueryClient();

  const hasItem = (itemId) => {
    return queryClient
      .getQueryData(["cart"])
      ?.items.find((item) => item.productId._id === itemId);
  };

  const addToCart = ({ itemId, quantity }) => {
    if (!userId) return;
    if (hasItem(itemId)) {
      return toast("Item already in cart");
    }
    add.mutate({ userId, itemId, quantity });
  };

  const increaseItem = ({ itemId, quantity }) => {
    if (!userId) return;
    increase.mutate({ userId, itemId, quantity });
  };

  const decreaseItem = ({ itemId, quantity }) => {
    if (!userId) return;
    decrease.mutate({ userId, itemId, quantity });
  };

  const removeFromCart = (itemId) => {
    if (!userId) return;
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
      toast.success("Cart Cleared");
    },
  });

  const remove = useMutation({
    mutationFn: ({ userId, itemId }) =>
      axios.post(`remove/cart/${userId}/${itemId}`, {}),
    onMutate: ({ itemId }) => {
      return { itemId };
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const add = useMutation({
    mutationFn: ({ userId, itemId, quantity }) =>
      axios.post(`add/cart/${userId}/${itemId}`, { quantity }),
    onSuccess: () => {
      toast.success("Added to Cart");
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const increase = useMutation({
    mutationFn: ({ userId, itemId, quantity }) =>
      axios.post(`cart/increase/quantity/${userId}/${itemId}`, {
        quantityToAdd: quantity,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const decrease = useMutation({
    mutationFn: ({ userId, itemId, quantity }) =>
      axios.post(`cart/decrease/quantity/${userId}/${itemId}`, {
        quantityToSubtract: quantity,
      }),
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
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
