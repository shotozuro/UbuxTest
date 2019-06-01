const createActionTypes = type => {
  return {
    REQUEST: `${type}_REQUEST`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`
  }
}

export const GET_ALL_STORES = createActionTypes('get_all_stores')
export const SEARCH_STORE = createActionTypes('search_store')
export const GET_STORE_DETAIL = createActionTypes('get_store_detail')
export const GET_PRODUCTS = createActionTypes('get_products')
