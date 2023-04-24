import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cart/reducer";
import { restaurantReducer } from "./entities/restaurant/reducer";
import { menuReducer } from "./entities/menu/reducer";
import { usersReducer } from "./entities/users/reducer";
import { reviewsReducer } from "./entities/reviews/reducer";

// const rootReducer = (state = {}, action = {}) => {
//   return {
//     cart: cartReducer(state.cart, action),
//     restaurant: restaurantReducer(state.restaurant, action),
//   };
// };

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  menu: menuReducer,
  users: usersReducer,
  reviews: reviewsReducer
});

export const store = createStore(rootReducer);

console.log("state", store.getState());
