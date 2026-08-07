import RequestsView from "./requestsView/RequestsView";
import UsersView from "./usersView/UsersView";

export const items = [
    {
        key: "users",
        label: "Users",
        children: (
            <UsersView />
        )
    },
    {
        key: "requests",
        label: "Requests",
        children: (
            <RequestsView />
        )
    },
];
