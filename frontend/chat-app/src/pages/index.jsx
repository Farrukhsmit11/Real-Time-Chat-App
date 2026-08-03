import { lazy } from "react";

const Chats = lazy(() => import("./dashboard/Dashboard"))
const AddFriend = lazy(() => import("../pages/addFriend/AddFriend"))
const UserProfile = lazy(() => import("../pages/userProfile/UserProfile"))

export {
    Chats,
    AddFriend,
    UserProfile
}