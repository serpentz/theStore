import { BASE_URL, CART_PRODUCT_URL } from "../constants/constants";

const options = (method, body) => {
  return {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  };
};

const getProducts = () => {
  return dispatch => {
    dispatch({ type: "GET_ALL_ITEMS_ATTEMPT" });
    return fetch(BASE_URL)
      .then(res => res.json())
      .then(response => {
        dispatch({ type: "GET_ALL_ITEMS_RESPONSE", payload: response });
      })
      .catch(err => console.warn(err));
  };
};

const addItemToCart = cartItem => {
  return dispatch => {
    dispatch({ type: "ADD_ITEM_TO_CART_ATTEMPT" });
    return fetch(CART_PRODUCT_URL, options("POST", { cart_product: cartItem }))
      .then(res => res.json())
      .then(response => {
        if (!Array.isArray(response.product)) {
          dispatch({ type: "ADD_ITEM_TO_CART_RESPONSE", payload: response });
        }
      })
      .catch(err => console.warn(err));
  };
};

const updateQuantity = (id, quantity) => {
  return dispatch => {
    dispatch({ type: "UPDATE_ITEM_QUANTITY_ATTEMPT" });
    return fetch(
      `${CART_PRODUCT_URL}/${id}`,
      options("PATCH", {
        cart_product: {
          quantity
        }
      })
    )
      .then(res => res.json())
      .then(response => {
        dispatch({ type: "UPDATE_ITEM_QUANTITY_RESPONSE", payload: response });
      })
      .catch(err => console.warn(err));
  };
};

const deleteItemFromCart = id => {
  return dispatch => {
    dispatch({ type: "DELETE_ITEM_TO_CART_RESPONSE", payload: { id: id } });
    return fetch(`${CART_PRODUCT_URL}/${id}`, options("DELETE", null))
      .then(res => res.json())
      .catch(err => console.warn(err));
  };
};

export { getProducts, addItemToCart, updateQuantity, deleteItemFromCart };
