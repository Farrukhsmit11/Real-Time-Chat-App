import { useEffect, useState } from 'react'
import "./ChatWindow.css"
import { Input, message, Upload } from 'antd';
import { PaperClipOutlined } from '@ant-design/icons';
import { IoIosSend } from "react-icons/io";
import PageHeader from "../pageHeader/PageHeader";
import { useDispatch, useSelector } from 'react-redux';
import { handleMessages, handleSendMessage } from '../../store/features/messages/messageThunk';

const ChatWindow = () => {

    const [text, setText] = useState("")
    const { selectedUser } = useSelector((state) => state.chat)

    const receiverId = selectedUser?.friendId?._id

    const { messages, loading } = useSelector((state) => state.message)

    const dispatch = useDispatch()

    const onSubmit = async () => {
        try {
            await dispatch(handleSendMessage({
                text,
                receiverId
            })).unwrap()

            setText("")

        } catch (error) {
            if (error.response) {
                message.error(error.response?.data?.message)
            }
        }
    }

    const getMessages = async () => {
        try {
            await dispatch(handleMessages(receiverId)).unwrap()
        } catch (error) {
            console.error("Error Fetching Messages ")
        }
    }

    useEffect(() => {
        if (receiverId) {
            getMessages()
        }
    }, [receiverId])


    return (
        <>
            <div className='chat-window-container'>
                <div className="header-section">
                    <PageHeader
                        user={selectedUser}
                    />
                </div>

                <div className="messages-container">
                    {/* {messages.map((msg) => {
                      
                        return (
                            <>
                                <div
                                    
                                >
                                    <span>{msg?.text}</span>
                                </div>
                            </>
                        );
                    })
                    } */}
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