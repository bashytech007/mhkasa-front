const endpoints = {
  order: [
    {
      name: "Get Orders",
      method: "GET",
      description: "Get all orders",
      auth: {
        type: "bearer",
        value: "Bearer jwt-token-here",
      },
      url: "/orders",
    },
    {
      name: "Get Order",
      method: "GET",
      description: "Get an order",
      auth: {
        type: "bearer",
        value: "Bearer jwt-token-here",
      },
      url: "/orders/:orderID",
    },
    {
      name: "create order",
      method: "POST",
      description: "Create order",
      auth: {
        type: "bearer",
        value: "Bearer jwt-token-here",
      },
      url: "/orders",
      payload: {
        cart: [],
        discount_code: "code",
      },
    },
  ],

  cart: [
    {
      name: "Get Cart",
      method: "GET",
      description: "Get user Cart",
      auth: {
        type: "bearer",
        value: "Bearer jwt-token-here",
      },
      url: "/cart",
    },
    {
      name: "Add to Cart",
      method: "POST",
      description: "Add item to cart",
      auth: {
        type: "bearer",
        value: "Bearer jwt-token-here",
      },
      url: "/cart/add",
      payload: {
        item: "itemID",
        quantity: 123456,
      },
    },
    {
      name: "Remove from Cart",
      method: "POST",
      description: "Remove item to cart",
      auth: {
        type: "bearer",
        value: "Bearer jwt-token-here",
      },
      url: "/cart/remove",
      payload: {
        item: "itemID",
      },
    },
    {
      name: "Increase Item",
      method: "POST",
      description: "Increase item count",
      auth: {
        type: "bearer",
        value: "Bearer jwt-token-here",
      },
      url: "/cart/:itemID",
      payload: {
        action: "increase",
        quantity: 2,
      },
    },
    {
      name: "Decrease Item",
      method: "POST",
      description: "Decrease item count",
      auth: {
        type: "bearer",
        value: "Bearer jwt-token-here",
      },
      url: "/cart/:itemID",
      payload: {
        action: "decrease",
        quantity: 2,
      },
    },
  ],
};
