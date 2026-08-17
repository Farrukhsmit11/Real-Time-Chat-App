import { lazy } from "react";

const Dashboard = lazy(() => import("./dashboard/Dashboard"))
const AddFriend = lazy(() => import("../pages/addFriend/AddFriend"))
const UserProfile = lazy(() => import("../pages/userProfile/UserProfile"))

export {
    Dashboard,
    AddFriend,
    UserProfile
}