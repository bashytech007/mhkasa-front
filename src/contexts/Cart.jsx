import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContext } from "react";
import axios from "../utils/axios";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/utils/useAuth";
export const CartContext = createContext();

export const Cart = ({ children }) => {
  const { getUserId } = useAuth();
  const queryClient = useQueryClient();

  const hasItem = (itemId) => {
    const cart = queryClient.getQueryData(["cart"]);

    return cart
      ? cart.items.find((item) => item.productId._id === itemId)
      : undefined;
  };

  const addToCart = ({ itemId, quantity }) => {
    const userId = getUserId();
    if (!userId) return;
    if (hasItem(itemId)) {
      return toast("Item already in cart");
    }
    add.mutate({ userId, itemId, quantity });
  };

  const increaseItem = ({ itemId, quantity }) => {
    const userId = getUserId();
    if (!userId) return;
    increase.mutate({ userId, itemId, quantity });
  };

  const decreaseItem = ({ itemId, quantity }) => {
    const userId = getUserId();
    if (!userId) return;
    decrease.mutate({ userId, itemId, quantity });
  };

  const removeFromCart = (itemId) => {
    const userId = getUserId();
    if (!userId) return;
    remove.mutate({ userId, itemId });
  };

  const clearCart = () => {
    const userId = getUserId();
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
