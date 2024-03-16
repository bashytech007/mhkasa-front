export const CartItem = ({ item }) => {
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>{item.description}</p>
        <p>{item.unitPrice}</p>
        <p>{item.quantity}</p>
      </div>
    </div>
  );
};
