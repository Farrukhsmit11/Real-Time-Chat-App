import { lazy } from "react";

const Dashboard = lazy(() => import("./dashboard/Dashboard"))
const AddFriend = lazy(() => import("../pages/addFriend/AddFriend"))

export {
    Dashboard,
    AddFriend,
}