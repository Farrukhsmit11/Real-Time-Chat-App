import axios from "axios"

export const get = (url, config) => {
    axios.get(url, config)
}

export const post = (url, data, config) => {
    return axios.post(url, data, config)
}

export const del = (url, config) => {
    axios.delete(url, config)
}