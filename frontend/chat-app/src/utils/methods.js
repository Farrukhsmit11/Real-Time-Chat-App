import {TOKEN} from "../utils/constant"

export const clearLocalStorage = async () => {
    localStorage.removeItem(TOKEN)
}

