import axios from "axios"

export const get = (url, config) => {
    return axios.get(url, config)
}

export const post = (url, data, config) => {
    return axios.post(url, data, config)
}

export const del = (url, data) => {
    return axios.delete(url, data)
}