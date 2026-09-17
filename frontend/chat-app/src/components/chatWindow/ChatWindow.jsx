import { useEffect, useRef, useState } from 'react'
import "./ChatWindow.css"
import { Input, message, Spin, Upload } from 'antd';
import { LoadingOutlined, PaperClipOutlined } from '@ant-design/icons';
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

    const messageEndRef = useRef();

    const currentMessage = messageEndRef.current?.scrollIntoView({ behavior: "smooth" })

    const sessionId = selectedUser?.sessionId
    const receiverId = selectedUser?.friendId?._id

    const dispatch = useDispatch()

    const onSubmit = async () => {
        if (!text.trim()) {
            message.error("Message cannot be empty");
            return;
        }
        try {
            await dispatch(handleSendMessage({
                text,
                receiverId,
            })).unwrap()

            setText("")

        } catch (error) {
            console.log("Error Sending Message", error)
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

                <div className='messages-container'>


                    {loading && messages.length === 0 ? (
                        <div className='messages-loading-page'>
                            <Spin size='large' indicator={<LoadingOutlined spin />} />
                        </div>
                    ) : (
                        messages.map((msg) => {

                            const isSent =
                                String(msg?.senderId) === String(loggedInUser);

                            return (
                                <div
                                    key={msg?._id}
                                    className={`message-bubble ${isSent ? 'message-bubble-sent' : 'message-bubble-received'}`}
                                >
                                    <span className="message-text">
                                        {msg?.text}
                                    </span>
                                </div>
                            );
                        })

                    )}
                    <div ref={messageEndRef}></div>
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
            </div >
        </>
    )
}

export default ChatWindow