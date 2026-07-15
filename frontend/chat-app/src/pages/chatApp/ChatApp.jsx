import React, { useState } from 'react'
import SideBar from '../../components/sideBar/SideBar'
import "./ChatApp.css"
import ChatContainer from '../../components/chatContainer/ChatContainer'
import EmptyChat from '../../components/emptyChat/EmptyChat'
import UserAvatar from '../../components/userAvatar/UserAvatar'
import pusher from '../../utils/pusher'
import { useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'

const ChatApp = () => {

    const [selectedUser, setSelectedUser] = useState(null)
    const [isChatOpen, setIsChatOpen] = useState(false);

    const { receiverId } = useParams()

    const handleSelectedUser = (user) => {
        setSelectedUser(user)
    }

    useEffect(() => {
        Pusher.logToConsole = true;

        var pusher = new Pusher('88f82a48f32821b4a8db', {
            cluster: 'us2'
        });

        const channel = pusher.subscribe('chat-app');


        channel.bind('new-message', function (data) {
            // console.log(data)
        });

        return () => {
            channel.unbind_all();
            pusher.unsubscribe("chat-app")
        }
    }, [])

    const BASE_URL = "http://localhost:5000"


    const fetchMessages = async () => {

        console.log("Selected User:", selectedUser);
        console.log("Selected User ID:", selectedUser?._id);
        try {
            const res = await axios.get(`${BASE_URL}/get-messages/${selectedUser._id}`, {

            },
                { withCredentials: true }
            )
            const data = res?.data.data
            console.log(data)
        } catch (error) {
            if (error.response) {
                message.error(error.response.data.message)
            }
            console.error("Messages failed to fetch")
        }
    }

    useEffect(() => {
        if (selectedUser) {
            fetchMessages();
        }
    }, [selectedUser])


    return (
        <>
            <div className="home-page">
                <div className="chat-layout">
                    <SideBar onSelectUser={handleSelectedUser} />

                    <div className="chat-content">
                        {selectedUser ? (
                            <ChatContainer selectedUser={selectedUser} />
                        ) : (
                            <EmptyChat />
                        )}

                    </div>

                </div>
            </div>
        </>
    )
}

export default ChatApp