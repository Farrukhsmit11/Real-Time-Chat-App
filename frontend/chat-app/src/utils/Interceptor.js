import axios from "axios";
import { TOKEN } from "./constant";
import { handleLogout } from "../store/features/auth/authThunk";
import { store } from "../store/store"

const BASE_URL = "http://localhost:5000"

const initializeInterceptor = () => {

    axios.defaults.baseURL = BASE_URL

    axios.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem(TOKEN)
            console.log(token)

            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            } else {
                // store.dispatch(handleLogout())
            }
            return config
        },

        (error) => {
            Promise.reject(error)
        }
    )

    axios.interceptors.response.use(
        function (response) {
            return response
        },

        function (error) {
            if (error?.response?.status === 401) {
                store.dispatch(handleLogout())
            }
            return Promise.reject(error)
        }
    )
}

export default initializeInterceptor