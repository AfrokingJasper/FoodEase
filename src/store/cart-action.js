import { authAction } from "./auth-slice";
import { cartAction } from "./cart-slice";

export const fetchCartData = (id) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        `https://foodease-backend-default-rtdb.firebaseio.com/users/${id}/cart.json`
      );

      if (!response.ok) {
        throw new Error("error");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartAction.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0,
        })
      );
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const sendCartData = (cart, id) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://foodease-backend-default-rtdb.firebaseio.com/users/${id}/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("sendiing cartData failed");
      }
    };
    try {
      await sendRequest();
    } catch (err) {
      console.log(err);
      dispatch(authAction.setError(err.message));
    }
  };
};
