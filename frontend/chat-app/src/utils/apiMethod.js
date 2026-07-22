import axios from "axios"

export const get = (url, config) => {
    axios.get(url, config)
}

export const post = (data, url, config) => {
    axios.post(data, url, config)
}

export const del = (url, config) => {
    axios.delete(url, config)
}