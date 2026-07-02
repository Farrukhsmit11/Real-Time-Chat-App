import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"))
const UserManagement = lazy(() => import("../pages/userManagement/UserManagement"))

export {
    Dashboard,
    UserManagement
}