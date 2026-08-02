import { lazy } from "react";

const Chats = lazy(() => import("../pages/chats/Chats"))
const AddFriend = lazy(() => import("../pages/addFriend/AddFriend"))

export {
    Chats,
    AddFriend
}