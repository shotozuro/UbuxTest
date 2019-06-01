const createActionTypes = type => {
  return {
    REQUEST: `${type}_REQUEST`,
    SUCCESS: `${type}_SUCCESS`,
    FAILURE: `${type}_FAILURE`
  }
}

export const GET_ALL_STORES = createActionTypes('get_all_stores')
export const SEARCH_STORE = createActionTypes('search_store')
