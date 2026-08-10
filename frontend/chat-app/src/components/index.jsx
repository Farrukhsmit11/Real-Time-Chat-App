import { lazy } from "react";

const ChatList = lazy(() => import("../components/chatList/ChatList"));
const ChatWindow = lazy(() => import("../components/chatWindow/ChatWindow"))
import SideBar from "./sideBar/SideBar";
import EmptyChat from "../components/emptyChat/EmptyChat"


export {
    SideBar,
    ChatList,
    ChatWindow,
    EmptyChat
}