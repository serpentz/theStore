let initialState = {
  products: [],
  newArrivalsArray: [],
  hotApperalArray:[],
  cart: {cart_products: [], products:[]}
}

const reducer = (oldState = initialState, action) => {

  switch (action.type) {
    case "GET_ALL_ITEMS_ATTEMPT": return oldState
    case "GET_ALL_ITEMS_RESPONSE":
      if (action.payload){
                  return {...oldState,
                  products: action.payload.products,
                  newArrivalsArray: action.payload.new,
                  hotApperalArray: action.payload.hot
                        }
              } else {
                  return oldState
              }
    case "ADD_ITEM_TO_CART_ATTEMPT": return oldState
    case 'ADD_ITEM_TO_CART_RESPONSE':
                  return {...oldState,cart: action.payload}

    case "UPDATE_ITEM_QUANTITY_ATTEMPT":  return oldState
    case "UPDATE_ITEM_QUANTITY_RESPONSE":
          if(action.payload){
                let cart_products = oldState.cart.cart_products.map(item => {
                  if(action.payload.id == item.id){
                      return action.payload
                }else{
                  return item
                }})
              return {...oldState,cart: {...oldState.cart, cart_products}}
          }else{
                return oldState
          }
    case "DELETE_ITEM_TO_CART_RESPONSE":

            if(action.payload){

            let cart_products = oldState.cart.cart_products.filter(item => {
            return  action.payload.id != item.id
            })
              return {...oldState,cart: {...oldState.cart, cart_products}}

            }else{
                    return oldState

                }
  }
  return oldState
}

export default reducer
