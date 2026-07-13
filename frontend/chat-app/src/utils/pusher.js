import Pusher from "pusher-js"

const pusher = new Pusher(import.meta.env.VITE_PUSHER_KEY, {
    cluster: import.meta.env.VITE_PUSHER_CLUSTER
})

pusher.connection.bind("connected", () => {
    console.log("pusher web soket connected")
})

pusher.connection.bind("error", () => {
    console.error("web socket connection failed")
})

export default pusher