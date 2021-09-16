import { combineReducers } from "redux";
import productReducer from "./productReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});
