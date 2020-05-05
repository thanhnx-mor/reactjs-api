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

export const  getDetailProduct  = (id) => {
  return (dispatch) => {
    return callAPI(`/products/${id}`, "GET", null)
      .then((res) => {
        dispatch(setProductEditting(res.data))
      })
  }
}
export const setProductEditting = (product) => {
  return {
    type: Types.EDIT_PRODUCT,
    product
  }
}


export const updateProductRequest = (product) => {
  return (dispatch) => {
    return callAPI(`/products/${product.id}`, "PUT", product)
      .then((res) => {
        dispatch(setProductUpdate(res.data))
      })
  }
}
export const setProductUpdate = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product
  }
}
