import "./ChatList.css"
import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import { Button, Divider, Input } from 'antd'
import UserAvatar from '../userAvatar/UserAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../../store/features/chats/chatSlice';
import { handleFriends } from "../../store/features/friends/friendsThunk";
import { useEffect } from "react";
import AnimatedSection from "../animatedSection/AnimatedSection";

const ChatList = () => {

    const dispatch = useDispatch()

    const { friends, loading } = useSelector((state) => state.friend)

    const getFriends = async () => {
        try {
            await dispatch(handleFriends()).unwrap()
        } catch (error) {
            console.error("error fetching friends", error)
        }
    }

    useEffect(() => {
        getFriends()
    }, [])

    return (
        <div className="chat-list-container">
            <div className="chat-list-header">
                <div className="header-left">
                    <h1 className="chat-list-title">
                        Messages
                    </h1>
                </div>

                <div className="header-right">
                    <Button
                        type="button"
                        className="chat-list-add-btn"
                        aria-label="New message"
                    >
                        <PlusOutlined className='plus-icon' />
                    </Button>
                </div>
            </div>

            <div className="input-section">
                <Input
                    className="search-input"
                    suffix={<SearchOutlined className="search-icon" />}
                    placeholder="Search Conversations"></Input>
            </div>
            <Divider />

            <AnimatedSection y={-20} delay={0.2}>
                <div className="chat-list-section">
                    {friends.map((friend) => {
                        return (
                            <div
                                className="chat-list-data-main"
                                onClick={() => {
                                    dispatch(setSelectedUser(friend))
                                }
                                }
                            >
                                <UserAvatar className='profile-avatar' name={friend.friendId?.name} />

                                <div className="chat-content">
                                    <div className="profile-detail-left">
                                        <h1 className='profile-name'>
                                            <div className="user-details">
                                                {friend.friendId?.name}

                                                <span className="last-message">
                                                    Hello
                                                </span>
                                            </div>
                                        </h1>
                                        <span className='status'></span>
                                    </div>
                                    <span className='last-message'></span>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </AnimatedSection>

        </div>
    )
}
export default ChatList