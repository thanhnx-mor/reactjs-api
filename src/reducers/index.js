import { combineReducers } from "redux";
import Products from "./products"
import productEditting from "./productEditting";
const myReducer = combineReducers({
  Products,
  productEditting
})
export default myReducer