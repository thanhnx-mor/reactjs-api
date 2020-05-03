import * as Types from "./../const/actionTypes"
import helpers from "./../utils/index"
var initialState = []
const Products = (state = initialState, action) => {
  let index
  let id
  switch (action.type) {
    case Types.FECTH_PRODUCTS :
      state = action.products
      return [...state]
    case Types.ADD_PRODUCT :
      state.push(action.product)
      return [...state]
    case Types.DELETE_PRODUCT :
      id = action.id
      index = helpers.findIndex(id, state)
      state.splice(index, 1)
      return [...state]
    default: return [...state]
  }
  return [...state]
}
export default Products