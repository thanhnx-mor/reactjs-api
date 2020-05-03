import * as Types from "./../const/actionTypes"
import callAPI from "../utils/api";
export const fetchProductRequest = () => {
  return (dispatch) => {
      return callAPI('/products', "GET", null)
        .then((res) => {
          let data = res.data
          dispatch(fetchProducts(data))
        })
  }
}
export const fetchProducts = (products) => {
  return {
    type: Types.FECTH_PRODUCTS,
    products
  }
}



export const addProductRequest = (product) => {
  return (dispatch) => {
    return callAPI('/products', "POST", product)
      .then((res) => {
        let data = res.data
        dispatch(addProduct(data))
      })
  }
}

export const addProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product
  }
}

export const deleteProductRequest = (id) => {
  return (dispatch) => {
    return callAPI(`/products/${id}`, "DELETE", null)
      .then((res) => {
       let data = res.data
       console.log(data, 'data')
        dispatch(deleteProduct(data.id))
      })
  }
}

export const deleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  }
}

export const  getDetailProduct  = async (id) => {
  let res = await callAPI(`/products/${id}`, "GET", null)
  await res
}