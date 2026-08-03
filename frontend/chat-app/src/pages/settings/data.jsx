import {
    FaUser,
    FaBell,
    FaLock,
    FaPalette,
    FaQuestionCircle,
} from "react-icons/fa";

import { LuBriefcaseBusiness, LuUsers } from "react-icons/lu";
import { IoMdKey } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";

export const settingsData = [
    {
        id: 1,
        title: "Business Tools",
        description: "Manage business profile, catalog, labels, and automation.",
        icon: <LuBriefcaseBusiness className="list-icon" />,
        color: "#4F6BFF",
    },

    {
        id: 2,
        title: "Account",
        description: "Change your password, security, and account information.",
        icon: <IoMdKey className="list-icon" />,
        color: "#FF4F64",
    },

    {
        id: 3,
        title: "Profile",
        description: "Edit your photo, name, about, and personal details.",
        icon: <LuUsers className="list-icon" />,
        color: "#0059F7",
    },

    {
        id: 4,
        title: "Notifications",
        description: "Control message, call, and desktop notification settings.",
        icon: <FaBell className="list-icon" />,
        color: "#FF9800",
    },

    {
        id: 5,
        title: "Privacy",
        description: "Manage who can see your information and activity.",
        icon: <FaLock className="list-icon" />,
        color: "#4CAF50",
    },

    {
        id: 6,
        title: "Appearance",
        description: "Customize theme, wallpaper, chat colors, and font size.",
        icon: <FaPalette className="list-icon" />,
        color: "#9C27B0",
    },

    {
        id: 7,
        title: "Help",
        description: "Get support, FAQs, contact us, and app information.",
        icon: <FaQuestionCircle className="list-icon" />,
        color: "#F44336",
    },
];