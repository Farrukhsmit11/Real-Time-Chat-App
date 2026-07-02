import { BellOutlined, FileTextOutlined, HomeOutlined, MessageOutlined, SafetyCertificateOutlined, SettingOutlined, TeamOutlined } from "@ant-design/icons";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";

export const sidebarLinks = [
    {
        id: 2,
        path: "",
        title: "Dashboard",
        icon: <RxDashboard />,
    },

    {
        id: 2,
        path: "user-management",
        title: "User Management",
        icon: <FiUsers />,
    },
    {
        id: 3,
        path: "roles",
        title: "Roles",
        icon: <TeamOutlined />,
    },
    {
        id: 4,
        path: "chats",
        title: "Chats",
        icon: <MessageOutlined />,
    },
];