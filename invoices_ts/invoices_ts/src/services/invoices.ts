//service for invoices

import axios from 'axios'
import {getToken} from '../utils/auth'

const baseUrl = 'http://localhost:3010/invoices'

const token = getToken();

const getAll = async () => {
    const response = await axios.get(baseUrl, {
        headers: {
             Authorization: `Bearer ${token}`,
         },
    })
    return response.data
}

const getByID = async (id: number) => {
    const response = await axios.get(`baseUrl/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    return response.data
}

export default {
    getAll,
    getByID,
}