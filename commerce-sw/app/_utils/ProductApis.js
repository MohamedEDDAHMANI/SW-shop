const { default: axiosClient } = require("./axiosClient");

const getLatestProducts = ()=> axiosClient.get('/products?populate=banner')


const getProductById = (id)=> axiosClient.get(`/products/${id}?populate=banner`)

const getProductByCategory = (category) => axiosClient.get(`/products?filters[category][$eq]=${category}&populate=banner`)

export default {
    getLatestProducts,
    getProductById,
    getProductByCategory
}