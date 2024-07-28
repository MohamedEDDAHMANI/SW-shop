const { default: axiosClient } = require("./axiosClient");

const addToCard = (data) => axiosClient.post('/cards', data)


const getUserCardsItems = (email)=> axiosClient.get(`/cards?populate[products][populate]=banner&filters[email][$eq]=${email}`)

const deleteItemFromCard = (id)=> axiosClient.delete(`/cards/${id}`)

export default {
    addToCard,
    getUserCardsItems,
    deleteItemFromCard,
}