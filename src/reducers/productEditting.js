import * as Types from "./../const/actionTypes"
var initialState = {}
const productEditting = (state = initialState, action) => {
	switch (action.type) {
		case Types.EDIT_PRODUCT :
			state = action.product
			return {...state}
		default: return {...state}
	}
}
export default productEditting