// import { cartAction } from "./cart-slice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://foodease-backend-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("seidning cartData failed");
      }
    };
    try {
      await sendRequest();
    } catch (err) {
      console.log(err);
    }
  };
};
