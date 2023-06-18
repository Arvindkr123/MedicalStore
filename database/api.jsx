import axios from "axios"

const apiURL = 'http://127.0.0.1:3002/Medicines'
const CART_URL = 'http://127.0.0.1:3002/cartMedicine'

export const addMedicines = async (data) => {
    try {
        return await axios.post(apiURL, data)
    } catch (err) {
        console.log(err.message)
    }
}

export const getMedicine = async () => {
    try {
        return await axios.get(apiURL);
    } catch (err) {
        console.log(err.message)
    }
}

export const updateData = async (data, id) => {
    try {
        return await axios.put(`${apiURL}/${id}`, data);
    } catch (err) {
        console.log(err)
    }
}


//  cart api functioning here
export const addToCartMedicine = async (data) => {
    try {
        return await axios.post(CART_URL, data);
    } catch (err) {
        console.log(err.message)
    }
}

export const getCartData = async () => {
    try {
        return await axios.get(CART_URL);
    } catch (err) {
        console.log(err.message)
    }
}