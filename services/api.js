import axios from 'axios'

const create = () => {
  const api = axios.create({
    baseURL: 'http://ubux.biz/test/',
    timeout: 15000
  })

  return {
    getAllStores: () => api.get('get-all-stores'),
    getStore: (storeId) => api.get(`get-store?storeId=${storeId}`),
    searchStore: (keyword) => api.post(`search-store`, { keyword }),
    getProducts: (storeId) => api.get(`get-store-products?storeId=${storeId}`),
    getProduct: (productId) => api.get(`get-product?productId=${productId}`)
  }
}

export default {
  create
}
