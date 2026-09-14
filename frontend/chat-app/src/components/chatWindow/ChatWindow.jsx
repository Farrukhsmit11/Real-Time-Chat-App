import { useEffect, useState } from 'react'
import "./ChatWindow.css"
import { Input, message, Upload } from 'antd';
import { PaperClipOutlined } from '@ant-design/icons';
import { IoIosSend } from "react-icons/io";
import PageHeader from "../pageHeader/PageHeader";
import { useDispatch, useSelector } from 'react-redux';
import { handleMessages, handleSendMessage } from '../../store/features/messages/messageThunk';

const ChatWindow = () => {

    const [text, setText] = useState("");

    const { user } = useSelector((state) => state.auth);

    const loggedInUser = user?.user?._id

    const { selectedUser } = useSelector((state) => state.chat)

    const { messages, loading } = useSelector((state) => state.message)

    const sessionId = selectedUser?.sessionId
    const receiverId = selectedUser?.friendId._id

    const dispatch = useDispatch()

    const onSubmit = async () => {

        try {
            await dispatch(handleSendMessage({
                text,
                receiverId,
            })).unwrap()

            setText("")
            getMessages()

        } catch (error) {
            if (error.response) {
                message.error(error.response?.data?.message)
            }
        }
    }

    const getMessages = async () => {
        try {
            await dispatch(handleMessages(sessionId)).unwrap()
        } catch (error) {
            console.error("Error Fetching Messages", error)
        }
    }

    useEffect(() => {
        if (sessionId) {
            getMessages()
        }
    }, [sessionId])

    return (
        <>
            <div className='chat-window-container'>
                <div className="header-section">
                    <PageHeader
                        user={selectedUser}
                    />
                </div>

                <div className="messages-container">
                    {messages?.map((msg) => {
                        const isSent = msg?.senderId === loggedInUser

                        return (
                            <div
                                className={`message-bubble ${isSent
                                    ? "message-bubble-sent"
                                    : "message-bubble-received"
                                    }`}
                            >
                                <span className="message-text">
                                    {msg?.text}
                                </span>
                            </div>
                        )
                    })}
                </div>

                <div className="send-message-area">
                    <Upload>
                        <PaperClipOutlined className="upload-file-icon" />
                    </Upload>

                    <Input
                        placeholder='Type a message'
                        className='send-message-input'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        suffix={
                            <>
                                <IoIosSend className='send-message-icon' onClick={() => onSubmit()} />
                            </>
                        }
                    >
                    </Input>
                </div>
            </div>
        </>
    )
}

export default ChatWindow